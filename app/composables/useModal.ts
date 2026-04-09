import { useTimeoutFn } from '@vueuse/core'

export type ModalType =
  | 'callback'
  | 'one-click'
  | 'success'
  | 'burger'
  | 'filters'
  | null

export function useModal() {
  const activeModal = useState<ModalType>('active-modal', () => null)
  const modalPayload = useState<any>('modal-payload', () => null)
  const lockedScrollY = useState<number>('locked-scroll-y', () => 0)

  const lockScroll = () => {
    if (import.meta.client) {
      lockedScrollY.value = window.scrollY
      document.documentElement.style.overflow = 'hidden'
      // ios
      document.body.style.position = 'fixed'
      document.body.style.top = `-${lockedScrollY.value}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    }
  }
  const unlockScroll = () => {
    if (import.meta.client) {
      document.documentElement.style.overflow = ''
      // ios
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo({ top: lockedScrollY.value, behavior: 'auto' })
    }
  }
  const open = (modalType: ModalType, payload: any = null) => {
    activeModal.value = modalType
    modalPayload.value = payload || null
    lockScroll()
  }

  const close = () => {
    activeModal.value = null

    if (import.meta.client && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    useTimeoutFn(() => {
      modalPayload.value = null
      unlockScroll()
    }, 300)
  }

  const toggleBurger = () => {
    if (activeModal.value === 'burger' || activeModal.value === 'filters') {
      close()
    } else {
      open('burger')
    }
  }

  const toggleFilters = () => {
    if (activeModal.value === 'filters') {
      close()
    } else {
      open('filters')
    }
  }

  return {
    activeModal,
    payload: modalPayload,
    open,
    close,
    toggleBurger,
    toggleFilters,
  }
}
