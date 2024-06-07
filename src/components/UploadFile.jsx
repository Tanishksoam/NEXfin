import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { storage } from "../firebase.config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { cross } from "../assets/images";

const UploadFile = ({ visible2 }) => {
  const [visible, setVisible] = useState(visible2);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const user = useSelector((state) => state.nex.UserInfo);

  const toggle = () => {
    setVisible(!visible);
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
    visible && (
      <>
        <div className="h-[100vh] w-[100vw] bg-zinc-950 opacity-50 absolute top-0 left-0 z-10 flex justify-center items-center"></div>
        <div className=" w-[60vw] h-[50vh] flex flex-col justify-center  bg-slate-50  absolute z-10 rounded-2xl top-[20vh] left-[20vw]">
          <div className="w-full flex justify-end items-end px-10">
            <div
              onClick={toggle}
              className=" w-10 h-10 flex justify-center items-center cursor-pointer z-10"
            >
              <img className=" w-8 h-8 " src={cross} alt="" />
            </div>
          </div>
          <div className=" w-full flex flex-col gap-4 justify-center items-center">
            <h2 className=" md:text-5xl text-3xl font-titleFont font-bold">
              Upload your Data Set
            </h2>

            <div className=" md:w-4/5 w-full flex flex-col gap-4 md:text-lg sm:text-md text-sm  border-2 border-gray-200 p-4 rounded-lg bg-gray-50">
              <p>
                ** To upload your data set that you have on your device, please
                click on the button below and select the file you want to
                upload.
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
                {imgUrl && (
                  <div className=" flex items-center gap-8">
                    <img src={imgUrl} className=" h-20" alt="uploaded file" />
                    <p> this file has been uploaded</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default UploadFile;
