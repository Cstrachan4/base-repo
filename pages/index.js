import {connect, useDispatch, useSelector} from "react-redux";
import clsx from 'clsx';

import HeadMeta from '../components/HeadMeta';
import Example from '../components/_refcomponent';

import '../lib/styles.js';

function HomePage() {

  return (
  	<>
	  	<HeadMeta title="Base repo" description="xxx" />
	  	<Example />
  	</>
  )
}

export default HomePage;


