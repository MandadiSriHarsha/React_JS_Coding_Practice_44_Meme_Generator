import styled from 'styled-components'

export const HomePageContainer = styled.div`
  height: 100vh;
  width: 90%;
  margin: auto;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 150px 0px 0px 0px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 25px;
  margin: 0px;
  padding: 30px 0px 40px 0px;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  height: 50%;
  max-height: 500px;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  margin: 0px 0px 20px 0px;
  @media screen and (min-width: 576px) {
    height: 60%;
  }
  @media screen and (min-width: 768px) {
    height: 350px;
    margin-left: 30px;
    order: 1;
    margin-top: 50px;
  }
`

export const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
`

export const TextOne = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  margin: 0px;
  padding: 20px 0px 0px 0px;
  font-weight: 500;
  font-size: ${props => props.fontHeight}px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const TextTwo = styled(TextOne)`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  margin: 0px;
  padding: 0px 0px 20px 0px;
  font-weight: 500;
  font-size: ${props => props.fontHeight}px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const FormContainer = styled.form`
  height: 50%;
  width: 100%;
  max-width: 500px;
  padding: 20px 5px 45px 5px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    height: 350px;
    width: 400px;
  }
`

export const FormHeading = styled(Heading)`
  display: none;
  margin: 0px;
  padding: 0px 0px 15px 0px;
  font-size: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const ImageLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  padding: 0px 0px 10px 0px;
  color: #7e858e;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ImageInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #7e858e;
  padding: 11px 0px 11px 15px;
  margin: 0px 0px 30px 0px;
  font-size: 16px;
  color: #000000;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    padding: 12px 0px 12px 20px;
    font-size: 18px;
  }
`

export const TopTextLabel = styled(ImageLabel)``

export const TopTextInput = styled(ImageInput)``

export const BottomTextLabel = styled(ImageLabel)``

export const SelectLabel = styled(ImageLabel)``

export const BottomTextInput = styled(ImageInput)`
  margin: 0px 0px 30px 0px;
`

export const SelectList = styled.select`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #7e858e;
  padding: 11px 15px 11px 15px;
  margin: 0px 0px 15px 0px;
  font-size: 12px;
  color: #000000;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    padding: 12px 0px 12px 20px;
    font-size: 18px;
  }
`

export const Option = styled.option`
  font-size: 14px;
  color: #000000;
  margin: 0px;
  padding: 0px 0px 5px 0px;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #0b69ff;
  margin: 0px 0px 0px 0px;
  padding: 12px 15px 12px 15px;
`
