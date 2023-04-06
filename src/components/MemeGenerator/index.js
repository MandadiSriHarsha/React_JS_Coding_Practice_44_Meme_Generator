import {Component} from 'react'

import {
  Heading,
  ImageInput,
  TopTextInput,
  BottomTextInput,
  GenerateButton,
  FormContainer,
  ImageContainer,
  HomePageContainer,
  ContentContainer,
  TextOne,
  TextTwo,
  FormHeading,
  ImageLabel,
  TopTextLabel,
  BottomTextLabel,
  SelectLabel,
  SelectList,
  Option,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    selectedValue: fontSizesOptionsList[0].optionId,
    check: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  generateMeme = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText} = this.state
    if (imageUrl !== '' && topText !== '' && bottomText !== '') {
      this.setState({check: true})
    } else {
      this.setState({check: false})
    }
  }

  changeFontSize = event => {
    this.setState({selectedValue: event.target.value})
  }

  render() {
    const {imageUrl, topText, bottomText, check, selectedValue} = this.state
    return (
      <HomePageContainer>
        <Heading>Meme Generator</Heading>
        {check ? (
          <ImageContainer imageUrl={imageUrl} data-testid="meme">
            <ContentContainer>
              <TextOne fontHeight={selectedValue}>{topText}</TextOne>
              <TextTwo fontHeight={selectedValue}>{bottomText}</TextTwo>
            </ContentContainer>
          </ImageContainer>
        ) : (
          ''
        )}
        <FormContainer onSubmit={this.generateMeme}>
          <FormHeading>Meme Generator</FormHeading>
          <ImageLabel htmlFor="imageInput">Image URL</ImageLabel>
          <ImageInput
            type="text"
            placeholder="Enter the image URL"
            id="imageInput"
            value={imageUrl}
            onChange={this.onChangeImageUrl}
          />
          <TopTextLabel htmlFor="topTextInput">Top Text</TopTextLabel>
          <TopTextInput
            type="text"
            placeholder="Enter the Top Text"
            id="topTextInput"
            value={topText}
            onChange={this.onChangeTopText}
          />
          <BottomTextLabel htmlFor="bottomTextInput">
            Bottom Text
          </BottomTextLabel>
          <BottomTextInput
            type="text"
            placeholder="Enter the Bottom Text"
            id="bottomTextInput"
            value={bottomText}
            onChange={this.onChangeBottomText}
          />
          <SelectLabel htmlFor="selectInput">Font Size</SelectLabel>
          <SelectList
            value={selectedValue}
            id="selectInput"
            onChange={this.changeFontSize}
          >
            {fontSizesOptionsList.map(eachitem => (
              <Option key={eachitem.optionId} value={eachitem.optionId}>
                {eachitem.displayText}
              </Option>
            ))}
          </SelectList>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
      </HomePageContainer>
    )
  }
}

export default MemeGenerator
