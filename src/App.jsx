import instaImg from './img/insta-img.png'
import instaLogo from './img/insta-logo.png'
import imgApple from './img/apple.png'
import imgGoogle from './img/google.png'
import iFacebook from './img/facebook.png'

export default function App() {
  return (
    <div className='h-full w-full flex flex-col'>

    <div className='flex justify-center items-center space-x-4'>
      <div className='md:flex justify-end hidden md:pl-6 md:max-w-96' >
        <img src={instaImg} alt="instagram" />
      </div>

      <div className='flex items-center flex-col mt-10'>

        <form className='max-w-96 flex flex-col items-center border rounded-md px-10 py-5 gap-5'>
          <img className="w-52" src={instaLogo} alt="logo instagram" />

          <input className='text-sm bg-slate-50 h-9 w-full pl-3 border rounded-sm' placeholder="Telefone, número de usuario ou email" type="text" />
          <input className='text-sm bg-slate-50 h-9 w-full pl-3 border rounded-sm' placeholder="Senha" type="text" />

          <button className='bg-blue-400 h-8 w-full rounded-md text-slate-50 hover:bg-blue-300'>Entrar</button>
          <div className='flex justify-center items-center gap-2'>
            <img className="size-5" src={iFacebook} alt="icon facebook" />
            <a className='text-blue-800 font-bold' href="#">Logar com o Facebook</a>
          </div>
          <a className='text-blue-800 text-sm cursor-pointer' href="#">Esqueci minha senha</a>
        </form>

        <div className='border max-w-80 my-4 text-center py-4 px-10'>
          <p>Não tem conta? <a className='text-blue-400 font-bold' href="#">Cadastrar-se</a></p>
        </div>

        <p>Baixe o aplicativo</p>

        <div className='flex gap-2 mt-4'>
          <img className='w-36' src={imgApple} alt="imagem Apple" />
          <img className='w-36' src={imgGoogle} alt="imagem Google" />
        </div>
      </div>
    </div>

      <footer className=' flex flex-col justify-center p-4 bg-slate-200 text-center mt-4'>
        <ul className='flex flex-wrap gap-5 justify-center'>
          <li className='text-slate-800 text-xs'> Meta</li>
          <li className='text-slate-800 text-xs'> Sobre</li>
          <li className='text-slate-800 text-xs'> Blog</li>
          <li className='text-slate-800 text-xs'> Carreiras</li>
          <li className='text-slate-800 text-xs'> Ajuda</li>
          <li className='text-slate-800 text-xs'> API</li>
          <li className='text-slate-800 text-xs'> Privacidade</li>
          <li className='text-slate-800 text-xs'> Configurações de cookies</li>
          <li className='text-slate-800 text-xs'> Termos</li>
          <li className='text-slate-800 text-xs'> Localizações</li>
          <li className='text-slate-800 text-xs'> Instagram Lite</li>
          <li className='text-slate-800 text-xs'> Threads</li>
          <li className='text-slate-800 text-xs'> Carregamento de contatos e não usuários</li>
          <li className='text-slate-800 text-xs'> Meta Verified</li>
        </ul>

        <ul className='flex justify-center gap-4 mt-10'>
          <li className='text-slate-800 text-sm'>Português (Brasil)</li>
          <li className='text-slate-800 text-sm'>© 2024 Instagram from Meta</li>
        </ul>
      </footer>
    </div>
  )
}
