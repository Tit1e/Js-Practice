import axios from '@/utils/axios'
const saveSubject = vm => {
  const router = vm.$route.path
  const { source: subject } = vm
  const data = { router, subject }
  axios.post('/api/subject/update',data).then(({ msg }) => {
    vm.$Notify.success(msg)
  })
}

const getSubject = vm => {
  axios.get(`/api/subject/get?router=${vm.$route.path}`).then(({ data }) => {
    vm.source = data.subject
  })
}

export {
  saveSubject,
  getSubject
}