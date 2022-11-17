import { createContext, useId } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import debounce from "lodash.debounce";
import { calculateBackoffMillis } from "@firebase/util";

export const onGenerateIds = (length = 20) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const onCreateRoom = async (
  creatorUsername,
  roomName,
  roomPassword,
  callback
) => {
  const roomId = onGenerateIds();

  const roomData = {
    isPlaying: false,
    isPublic: false,
    roomId,
    roomName,
    roomOwner: creatorUsername,
    roomPassword: roomPassword ? roomPassword : 0,
    songsHistory: [],
    songsQueue: [],
    users: [
      {
        username: creatorUsername,
        role: "admin",
      },
    ],
  };

  try {
    const roomDocRef = await setDoc(doc(db, "rooms", roomId), roomData);
    callback(roomData);
  } catch (e) {
    alert("Error creating a room: ", e);
    console.error("Error creating a room: ", e);
  }
};
