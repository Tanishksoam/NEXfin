import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { storage } from "../firebase.config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getDatabase, push } from "firebase/database";

const FileUpload = () => {
  const [link, setLink] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const user = useSelector((state) => state.nex.UserInfo);

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmitlink = (e) => {
    e.preventDefault();

    const database = getDatabase();

    // Reference to a specific node in the database (replace 'links' with your own node)
    const databaseRef = ref(database, `${user.name}/links`);

    // Push the link to the database
    push(databaseRef, { link })
      .then(() => {
        console.log("Link submitted to Firebase Database successfully!");
        // Optionally, you can reset the input field after submission
        setLink("");
      })
      .catch((error) => {
        console.error("Error submitting link to Firebase Database:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `${user.name}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };
  return (
    <div className=" w-screen flex flex-col gap-8 items-center justify-center py-10 md:px-20 px-4">
      <h2 className=" md:text-5xl text-3xl font-titleFont font-bold">
        Upload your Data Set
      </h2>
      <p className=" md:text-2xl text-lg font-titleFont text-center font">
        You have two options to upload the file either you can upload the file
        or to upload the link of you data set.
      </p>
      <div className=" md:w-4/5 w-full flex flex-col gap-4 md:text-lg sm:text-md text-sm  border-2 border-gray-200 p-4 rounded-lg bg-gray-50">
        <p>
          ** To upload your data set that you have on your device, please click
          on the button below and select the file you want to upload.
        </p>
        <div className="App">
          <form
            onSubmit={handleSubmit}
            className="w-full flex md:flex-row flex-col gap-2 md:justify-between justify-start md:items-center  px-4 "
          >
            <input type="file" />
            <button
              className="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-full border-sky-900 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              type="submit"
            >
              Upload
            </button>
          </form>
          {!imgUrl && (
            <div className=" my-2 border-[1px] border-gray-300 rounded-full overflow-hidden">
              <div
                className=" bg-sky-700 text-center text-white  py-2 rounded-full border-sky-900 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                style={{ width: `${progresspercent}%` }}
              >
                {progresspercent}%
              </div>
            </div>
          )}
          {imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />}
        </div>
      </div>
      <h2>Or</h2>
      <div className=" md:w-4/5 w-full flex  flex-col gap-4 md:text-lg sm:text-md text-sm  border-2 border-gray-200 p-4 rounded-lg bg-gray-50">
        <p>
          ** To upload your data set that is online, please paste link below and
          upload it.
        </p>
        <form
          className="w-full flex md:flex-row flex-col justify-between md:items-center px-2 gap-1 "
          onSubmit={handleSubmitlink}
        >
          <div className=" w-[90%] p-2 rounded-xl flex  gap-1 justify-center items-center">
            <label
              className=" w-[20%]   flex ml-4 font-bodyFont font-medium text-center items-center justify-center"
              htmlFor="exampleInputEmail"
            >
              {" "}
              Link
            </label>
            <input
              className=" w-[80%] h-10 rounded-xl px-2 border-[1px] border-gray-300"
              type="text"
              name="link"
              value={link}
              onChange={handleLinkChange}
              placeholder="Enter your link"
            />
          </div>
          <input
            className="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-full border-sky-900 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            type="submit"
            value="Upload"
          />
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
