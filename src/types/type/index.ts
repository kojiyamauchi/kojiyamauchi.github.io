export type ValueOf<T> = T[keyof T]

export type PageProps = {
  chooseLayout: 'fixedLayout' | 'errorLayout'
  // For extract below line of code in Hygen
  // prettier-ignore
  pages: 'primary' | '404' | '500' | 'ui-test' | 'storybook'
}

export type ModalTypes = {
  isOpen: boolean
}

export type AboutMeTypes = {
  isOpen: boolean
}

export type FirstVisitTypes = {
  isVisited: boolean
}

export type StoreTypes = {
  modalStore: ModalTypes
  aboutMeStore: AboutMeTypes
  firstVisitStore: FirstVisitTypes
}
