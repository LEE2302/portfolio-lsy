import usePreventScroll from "@/hooks/usePreventsScroll"
import { ReactNode } from "react"
import ReactDOM from "react-dom"
import { AiOutlineClose } from "react-icons/ai"

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  modalRef: React.ForwardedRef<HTMLDivElement>
  modalOutSideClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

function ProjectModal({ open, onClose, modalRef, modalOutSideClick, children }: ModalProps) {
  usePreventScroll(open)
  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-50"
        ref={modalRef}
        onClick={e => modalOutSideClick(e)}
      />
      <div className=" scroll box1 prose max-w-[1032px] lg:w-[1032px] md:w-[800px] md:text-[100%] w-[350px] text-[60%]  h-[80%] overflow-y-scroll break-keep fixed top-[50%] left-[50%] p-[50px] bg-white z-50 translate-x-[-50%] translate-y-[-50%] rounded-md">
        <div className="text-end md:text-4xl text-xl mb-3">
          <button onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("project-modal") as HTMLElement,
  )
}

export default ProjectModal
