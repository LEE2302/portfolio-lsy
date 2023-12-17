import usePreventScroll from "@/hooks/usePreventsScroll"
import { ReactNode } from "react"
import ReactDOM from "react-dom"

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
      <div className="prose max-w-[1032px] w-[1032px] h-[80%] overflow-scroll fixed top-[50%] left-[50%] p-[20px] bg-white z-50 translate-x-[-50%] translate-y-[-50%]">
        <button onClick={onClose}>모달 닫기</button>
        {children}
      </div>
    </>,
    document.getElementById("project-modal") as HTMLElement,
  )
}

export default ProjectModal
