import React from 'react';

const DisplayGiphy = (props) => {

  const giphyStyle = {
    height: '186px',
    width: '284px',
    border: '2px solid black'
  }

  const displayGiphyData = props.giphyData.map((item) => {
    console.log(item.images.downsized.url, 'GIPHY PROPS')
    return (
        <img style={giphyStyle} src={item.images.downsized.url} />
    )
  })

  return(
    <div>
      {displayGiphyData}
    </div>
  );
}


export default DisplayGiphy;
