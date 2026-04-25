export interface GalleryItem {
  name: string
  image: string
}

export interface CardOneData {
  HEADER_ONE: string
  PAR_ONE: string
  LEAD_IN: boolean
  PAR_TWO: string
  IMG_ICON: string
}

export interface CardTwoData {
  HEADER_ONE: string
  PAR_ONE: string
  GALLERY_DATA: GalleryItem[]
}

export interface CardThreeData {
  HEADER_ONE: string
  PAR_ONE: string
  GALLERY_DATA: GalleryItem[]
}

export interface FooterData {
  APP_NAME: string
  EMAIL: string
  LINK: string
  IMG_ICON: string
}

export type AppData = [CardOneData, CardTwoData, CardThreeData, FooterData]
