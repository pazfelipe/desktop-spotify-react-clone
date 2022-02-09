import React, {useEffect, useMemo} from 'react';
import TopHeaderContainer from '../components/TopHeaderContainer';
import Col from '../components/ui/Col';
import Row from '../components/ui/Row';
import DefaultLayout from '../layouts/default';
import CardSong from '../components/SongCard';

const Home = () => {

  const [visible, setVisible] = React.useState(false);
  const dailyMixes = useMemo(() => [
    {
      id: 999,
      name: 'Liked Songs'
    },
  ], []);

  useEffect(() => {
    const numberOfCards = window.innerWidth > 1366 ? 7 : 3
    for(let i = 0; i < numberOfCards; i++) {
      dailyMixes.push({
        id: i + 1,
        name: 'Daily Mix ' + (i + 1),
      });
    }
    setVisible(true);
  }, [dailyMixes]);

  return (
    <DefaultLayout>
      <TopHeaderContainer>

      </TopHeaderContainer>
      <div className='container-home container-page'>
        <h2 className='mt-5 mb-4'>Good morning</h2>
        <Row>

          {
            visible && dailyMixes.map(dailyMix => {
              return (
                <Col
                  className='mb-3'
                  col='col-3'
                  key={dailyMix.id}>
                  <CardSong
                    id={dailyMix.id}
                    name={dailyMix.name}
                  />
                </Col>
              );
            })
          }
        </Row>
      </div>
    </DefaultLayout>
  );
};

export default Home;