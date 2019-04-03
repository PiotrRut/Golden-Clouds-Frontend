import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CarouselPage from '../components/CarouselPage';
import MediaComponent from '../components/MediaComponent';
import { FaCalendarCheck, FaPhone,} from 'react-icons/fa';
import InputForm from '../components/InputForm';
import Footer from '../components/Footer';
import '../styles/App.css';


const medias = [
  {
    icon: <FaCalendarCheck />,
    title: "Bookings",
    content: "We have a range of tanning options available, and we can suit our service to your needs. Check for available slots, and make a booking now!",
    path: "/bookings"
  },
  {
    icon: <FaPhone />,
    title: "Contact Us",
    content: "For enquiries, please contact us on our telephone help line, or send us an e-mail, and we will answer as quick as we can.",
    path: "/contact"
  },

]


class Home extends Component {
    render() {
        return (
            <div className="Home">
              <CarouselPage>
              </CarouselPage>

              <div className="MediaComponents">
                  {
                    medias.map((val) => (
                      <MediaComponent icon={val.icon} title={val.title} path={val.path}>
                        {val.content}
                      </MediaComponent>
                    ))
                  }
                </div>
            </div>


        )
    }
}

export default Home;
