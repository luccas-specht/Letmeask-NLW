import { useParams } from 'react-router-dom'

import { RoomCode } from '../../atoms'

import logoImg from '../../../assets/images/logo.svg'

import './header.scss'

export const Header = () => {
  const { id } = useParams<{id: string}>()

  return (
    <header className="header">
      <div className="header__content">
        <img src={logoImg} alt="logo" />
        <RoomCode code={id}/>
      </div>
    </header>
  )
}