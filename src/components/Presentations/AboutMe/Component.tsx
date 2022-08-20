/*
  About Me Component.
*/

import styles from './style.module.scss'

type Props = {
  closeAboutMe: () => void
}

export const AboutMe: React.FC<Props> = ({ closeAboutMe }): JSX.Element => {
  return (
    <div className={`${styles.wrapper} about-me`}>
      <h1 className={`${styles['primary-heading']} primary-heading`}>
        <span className="is-en">Koji Yamauchi</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span className="is-jp">ヤマウチ コウジ</span>
      </h1>
      <p className={`${styles.letter} letter is-en`}>
        I am mainly involved in web front-end development and production from Based in Tokyo, Japan.
        <br />
        (Some back-end development and design work)
        <br />
        In the front-end area, we can handle everything from styling, such as UI implementation and design implementation, to interaction implementation,
        animation implementation, and API communication, so please feel free to contact us.
        <br />
        My skills, TypeScript / JavaScript / React / Next.js / Node.js / Webpack / Gulp / GitHub / Sass / CSS / HTML / VSCode / Figma(a little) / Sketch(a
        little) / Photoshop / Illustrator.
        <br />
        Currently, past projects is private.
        <br />
        If want you see please following contact us.
        <br />
        I’ll get back to you.
        <br />
        Loves &amp; fun making things.<span className="is-emoji">✌️</span>
      </p>
      <p className={`${styles.letter} letter is-jp`}>
        東京都内にて、主にWebフロントエンドの開発・制作に携わっております。
        <br />
        (Node.js開発・デザイン制作も少々)
        <br />
        フロントエンド領域においては、UI実装・デザイン実装等のスタイリング周りから、インタラクション実装・アニメーション実装・API通信まで承る事が可能ですので、お気軽にご連絡下さい。
        <br />
        使用言語・開発環境等は、TypeScript・JavaScript・React・Next.js・Node.js・Webpack・Gulp・GitHub・Sass・CSS・HTML・VSCode・Figma(少々)・Sketch(少々)・Photoshop・Illustratorになります。
        <br />
        現在、制作実績は非公開になりますので、下記よりお問い合わせ下さい。
        <br />
        折り返しご連絡させていただきます。
      </p>
      <div className={`${styles['mail-wrapper']} mail-wrapper`}>
        <a className={`${styles['button-mail']} button-mail`} href="mailto:all.the.small.things@me.com">
          <svg className={`${styles['icon-arrow-mail']} icon-arrow-mail`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" />
          </svg>
          CONTACT US
        </a>
      </div>
      <div className={`${styles['back-wrapper']} back-wrapper`}>
        <button className={`${styles['button-back']} button-back`} onClick={closeAboutMe}>
          <svg className={`${styles['icon-arrow-back']} icon-arrow-back`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          HIDE ABOUT ME
        </button>
      </div>
    </div>
  )
}
