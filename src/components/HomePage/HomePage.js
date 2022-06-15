import { Button } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePageLinks from './HomePageLinks/HomePageLinks';
import './HomePage.css';

function HomePage() {

	const navigate = useNavigate();
	const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 481px)'  });

    return(

    <div className="home"> 
		<div className="page">
		{isDesktop &&
			<HomePageLinks />
		}
			<Header />
			{isMobile &&
				<div className="buttons-mobile">
					<Button id="button-mobile" inverted color="black">Jouer</Button>
					<Button id="button-mobile" inverted color="black" onClick={() => navigate('/archived')}>Parties archivées</Button>
					<Button id="button-mobile" inverted color="black" onClick={() => navigate('/login')}>Se connecter</Button>
					<Button id="button-mobile" inverted color="black" onClick={() => navigate('/signup')}>Inscription</Button>
				</div>
			}
			{isDesktop &&
                <div className="buttons-desktop">
					<Button id="menu-button" inverted color="black">Jouer</Button>
					<Button id="menu-button" inverted color="black" onClick={() => navigate('/archived')}>Parties archivées</Button>
				</div>
					}

		</div>
			{/* TODO: add desktop version 
			<---   here   --->
			*/}
			
			<h2>Règles du jeu</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at molestie nisl. Phasellus sit amet sollicitudin justo. Fusce bibendum finibus arcu vel consequat. Duis tincidunt ac felis vel ullamcorper. Maecenas venenatis scelerisque elit. Nullam non tristique massa. Aenean semper enim imperdiet viverra porttitor. Integer rhoncus felis pulvinar mauris tincidunt aliquet. Etiam cursus non orci luctus consectetur. Aenean at sapien sapien. Etiam at ipsum tincidunt, semper sem in, tincidunt justo. Fusce congue neque purus, at viverra metus ullamcorper et. Vestibulum vitae lectus tempus, ultricies nisi ut, lobortis erat. Aliquam a justo mauris. Curabitur ut consectetur augue. Nulla vel condimentum nisi.

			Suspendisse ut diam sit amet dolor tristique pharetra et at eros. Sed quis mattis enim. Curabitur nulla felis, efficitur ut nisi ac, posuere pretium risus. Sed eget eleifend diam. In hac habitasse platea dictumst. Quisque eros magna, ornare in ligula sed, interdum euismod sem. Cras eget leo a massa malesuada efficitur eu ut magna. Curabitur vulputate est ac euismod lacinia. Phasellus tristique nulla quis augue mattis interdum. Proin posuere velit in diam finibus bibendum.

			Vestibulum tempus, nunc in rutrum elementum, elit lorem malesuada ante, id ullamcorper lectus nulla eget sapien. Etiam elementum efficitur nibh, eget volutpat libero pharetra vitae. Praesent sit amet nunc ac metus molestie ullamcorper sed quis tellus. Sed eget vehicula mauris, sit amet euismod urna. Sed nunc lacus, euismod non feugiat vitae, rutrum mattis nisi. Praesent gravida neque vel nibh pulvinar vehicula. Quisque nec lacus a augue interdum rhoncus. Nam ultricies, tellus vel molestie suscipit, velit dolor convallis mauris, id molestie erat nibh eget nisl. Duis at lorem eleifend nisl porttitor imperdiet. Praesent lobortis cursus sem ac venenatis. Nam sed lectus vitae tortor hendrerit venenatis id sit amet leo. Sed eleifend accumsan elit. Curabitur vestibulum porta vulputate. Ut volutpat, felis a elementum rhoncus, lacus elit feugiat eros, ut maximus diam neque consectetur lectus. In varius odio vel quam rhoncus, ac pretium lectus lobortis. Proin ornare facilisis magna faucibus imperdiet.

			Etiam eget eros metus. Aliquam tempus ex ut massa tincidunt, tempus dignissim neque laoreet. Morbi commodo magna vel tellus tincidunt lacinia. Curabitur eu ipsum tortor. In rutrum faucibus massa quis tincidunt. Etiam dui odio, sagittis sit amet lacus quis, suscipit placerat ante. Proin dictum dictum sapien, a mollis ligula tempus vel. Nullam ante nisl, efficitur sed feugiat nec, tempus ultrices orci. Donec venenatis congue dolor. Curabitur justo nisi, vehicula eget accumsan a, rutrum ut nisl. Nam interdum pulvinar felis, et tempor nunc.

			Sed ut posuere diam, ut vestibulum lacus. Fusce faucibus viverra dui at fermentum. Etiam feugiat lacus id ligula tristique semper a quis erat. Mauris sit amet consectetur quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla at libero quis diam finibus semper. Duis ultricies sapien at mauris convallis, sit amet efficitur orci placerat.</p>
			<Footer />
    </div>
    );
}

export default HomePage;
