import Images from './Images';
import Song from './Song';
import Text from './Text';

type Props = {
}

const Timelapse: React.FC<Props> = () => {
  return (
    <div style={{
      display:'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Song />
      <Images />
      <Text />
    </div>
  );
};

export default Timelapse;