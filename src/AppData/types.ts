export interface GalleryItem {
  name: string
  image: string
  url?: string
}

export interface CardOneData {
  HEADER_ONE: string
  PAR_ONE: string
  LEAD_IN: boolean
  PAR_TWO: string
  PROFILE_IMG: string
  PROFILE_NAME: string
  GITHUB_LINK: string
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

export interface NotFoundData {
  HEADER_ONE: string
}

export type AppData = [CardOneData, CardTwoData, CardThreeData, FooterData]
