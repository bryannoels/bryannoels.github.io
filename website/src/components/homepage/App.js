import './App.css';
import board from '../../images/board.png'
import book from '../../images/book.png'
import laptop from '../../images/laptop.png'
import mug from '../../images/mug.png'
import phone from '../../images/phone.png'

function Homepage() {
  return (
    <div className="homepage">
      <div className = "homepage__title">
        <p className = "homepage__title__first_name">Bryan Noel</p>
        <p className = "homepage__title__last_name">SALINDEHO</p>
        <p className = "homepage__title__role">SOFTWARE DEVELOPER | REACT, JAVA, SQL</p>
      </div>
      <div className = "homepage__image">
        <img src = {board} alt = "board" className = "homepage__image__board"/>
        <img src = {book} alt = "book" className = "homepage__image__book"/>
        <img src = {laptop} alt = "laptop" className = "homepage__image__laptop"/>
        <img src = {mug} alt = "mug" className = "homepage__image__mug"/>
        <img src = {phone} alt = "phone" className = "homepage__image__phone"/>
      </div>
    </div>
  );
}

export default Homepage;
