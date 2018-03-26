import Api from '@/services/Api'

export default {
  addAbout(credentials) {
    return Api().post('content', credentials)
  }
}