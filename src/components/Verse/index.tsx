import { Container, VerceTitle, VerseBody, VerseSource, Button } from './styles';
import { FaPrayingHands } from 'react-icons/fa';
import { useState } from 'react';

export const Verse: React.FC = () => {
  const [verse, setVerse] = useState("");
  const [chapter, setChapter] = useState(1);
  const [chapters, setChapters] = useState(1);
  const [verseNumber, setVerseNumber] = useState(1);

  async function handleGenerateChapter(){

    fetch("https://www.abibliadigital.com.br/api/books/sl")
    .then(response => {
      response.json()
      .then(data => {
        setChapters(data.chapters);
        console.log(data);
      })
    })

    await handleGenerateVerse();
  }


  async function handleGenerateVerse(){
    const chapterNumber = Math.floor(Math.random() * chapters) + 1;

    fetch(`https://www.abibliadigital.com.br/api/verses/nvi/sl/${chapterNumber}`)
    .then(response => {
      response.json()
      .then(data => {
        const verseNumber =  Math.floor(Math.random() * data.chapter.verses);
        setVerseNumber(verseNumber);
        setVerse(data.verses[verseNumber].text);
        setChapter(data.chapter.number);
        console.log(data.verses[verseNumber].text)
      })
    })
  }

  return (
    <Container>
      { 
        verse ? (
          <>
            <VerseBody>
              “{verse}”
            </VerseBody>
            <VerseSource>Salmos({chapter},{verseNumber+1})</VerseSource>
          </>

        ) 
        : (
          <>
            <VerceTitle>Disse Jesus:</VerceTitle>
            <VerseBody>
              “Eu sou o caminho, a verdade e a vida.
              Ninguem pode ir ao Pai senão por mim.”
            </VerseBody>
            <VerseSource>João(14,6)</VerseSource>
          </>
        )
      }
      <Button onClick={handleGenerateChapter}>Quero a palavra do Senhor! <FaPrayingHands size={24} style={{ marginLeft: '7px' }}/></Button>
    </Container>
  );
};
