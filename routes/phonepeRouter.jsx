const express = require("express");
const router = express.Router();
const cryoto = require("crypto");
const axios = require("axios");

function generateTransactionId() {
  const timeStamps = Date.now();
  const random = Math.floor(Math.random() * 1000000);
  const merchantPrefix = "T";
  const transactionId = `${merchantPrefix}${timeStamps}${random}`;
  return transactionId;
}

router.post("/payment", async (req, res) => {
  try {
    const { name, number, amount } = req.body;
    const data = {
      merchantId: "PGTESTPAYUAT",
      transactionId: generateTransactionId(),
      name: name,
      amount: 100 * 100,
      redirectUrl: "http://localhost:5000/api/phonepe/status",
      redirectMode: "POST",
      mobileNumber: number,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const payload = JSON.stringify(data);
    const payloadMain = buffer.from(payload).toString("base64");
    const key = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + key;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const options = {
      method: "POST",
      url: URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        return res
          .status(200)
          .send(response.data.data.instrumentResponse.redirectInfo.url);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (error) {
    req.status(500).send({
      message: error.message,
      sucess: false,
    });
  }
});

router.post("/status", async (req, res) => {
  return console.log(res.req.body);
  const merchantTranstionId = res.req.body.transactionId;
  const merchantId = res.req.body.merchantId;
  const keyIndex = 1;
  const key = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
  const string =
    `/pg/v1/payment/${merchantId}/${merchantTranstionId}${key}` + key;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTranstionId}`;

  const options = {
    method: "GET",
    url: URL,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": merchantId,
    },
  };

  axios
    .request(options)
    .then(async (response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
});
