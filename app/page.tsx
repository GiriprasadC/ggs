import GGSHeader from '../components/header'
import OurGoal from '../components/ourgoal'
import Showcase from '../components/showcase'
import OurTeam from '../components/ourteam'
import JoinUs from '../components/joinus'
import ContactUs from '../components/contactus'
import './globals.css'
export default function Home() {
  return (
    <>
      <GGSHeader/>  
      <OurGoal/>
      <Showcase/>
      <OurTeam/>
      <hr/>
      <JoinUs/>
      <ContactUs/>
      
    </>
  );
}
