import { useTimeoutFn } from '@vueuse/core'

export type ModalType = 'callback' | 'one-click' | 'success' | 'burger' | null

export function useModal() {
  const activeModal = useState<ModalType>('active-modal', () => null)
  const modalPayload = useState<any>('modal-payload', () => null)

  const lockScroll = () => {
    if (import.meta.client) {
      document.body.style.overflow = 'hidden'
    }
  }
  const unlockScroll = () => {
    if (import.meta.client) {
      document.body.style.overflow = ''
    }
  }
  const open = (modalType: ModalType, payload: any = null) => {
    activeModal.value = modalType
    modalPayload.value = payload || null
    lockScroll()
  }

  const close = () => {
    activeModal.value = null
    useTimeoutFn(() => {
      modalPayload.value = null
    }, 300)
    unlockScroll()
  }

  const toggleBurger = () => {
    if (activeModal.value === 'burger') {
      close()
    } else {
      open('burger')
    }
  }

  return {
    activeModal,
    payload: modalPayload,
    open,
    close,
    toggleBurger,
  }
}
