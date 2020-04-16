import { func } from "prop-types";

export function uploadImgToBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {  // 图片转base64完成后返回reader对象
      resolve(reader)
    }
    reader.onerror = reject
  })
}


export function setSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export function getSessionStorage(key) {
  return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : undefined
}
