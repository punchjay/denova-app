import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.92) }
  to   { opacity: 1; transform: scale(1) }
`

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.18s ease;
  padding: 1.5rem;
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: ${scaleIn} 0.2s ease;
  max-width: min(90vw, 56rem);
  width: 100%;
`

const Img = styled.img`
  width: 100%;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6);
  display: block;
`

const Caption = styled.p`
  color: #c1cfd7;
  font-size: 0.95rem;
  margin: 0;
`

const CloseButton = styled.button`
  position: fixed;
  top: 1.25rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #b1b3b4;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: color 0.15s ease;
  &:hover {
    color: #20bbfc;
  }
`

interface Props {
  src: string
  alt: string
  onClose: () => void
}

const Lightbox = ({ src, alt, onClose }: Props) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <Backdrop onClick={onClose} data-testid="lightbox-backdrop">
      <CloseButton onClick={onClose} aria-label="Close lightbox">
        &times;
      </CloseButton>
      <Modal
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={alt}
      >
        <Img src={src} alt={alt} />
        <Caption>{alt}</Caption>
      </Modal>
    </Backdrop>,
    document.body,
  )
}

export default Lightbox
