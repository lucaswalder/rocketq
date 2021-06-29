
// modal
export default function Modal() {

  const modalBox = document.querySelector(".modal-bg")
  const cancelButton = document.querySelector(".button-grey")
  cancelButton.addEventListener("click", close)

  function open() {
    modalBox.classList.add("active")
  }
  function close() {
    modalBox.classList.remove("active")
  }
  return{
    open,
    close
  }
}
