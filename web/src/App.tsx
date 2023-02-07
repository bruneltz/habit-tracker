import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import './styles/global.css';
import './libs/dayjs'
import { api } from './libs/axios';

//Local notifications nos browsers não permite scheduling e quando o app está fechado
//window.Notification.requestPermission(permission => {
//  if (permission == 'granted') +
//    new window.Notification('Habits', {
//      body: 'Texto'
//    })
//})


//fcm = firebase cloud message
navigator.serviceWorker.register('service-worker.js').then(
  async serviceWorker => {
    let subscription = await serviceWorker.pushManager.getSubscription()

    if (!subscription) {

      const publicKeyResponse = await api.get('/push/public_key')

      subscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKeyResponse.data.publicKey
      })
    }
  
    await api.post('/push/register', { subscription })
    await api.post('/push/send', {subscription})
  }
)

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
        <Header />
        <SummaryTable />
      </div>
    </div>
  )
}