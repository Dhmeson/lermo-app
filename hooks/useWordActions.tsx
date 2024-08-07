import { Book } from '@/app/class/Book';
import { useState, useEffect, useRef } from 'react';
import { useSettings } from './useSettings';
import { useBooks } from '@/ctx/booksContext';

interface UseWordIntervalProps {
    book:Book|undefined
}

const speedToInterval = (speed_: number) => {
    switch (speed_) {
        case 0: return 2000; // 2 segundos
        case 1: return 1000; // 1 segundo
        case 2: return 500;  // 0.5 segundo
        case 3: return 250;  // 0.25 segundo
        default: return 1000; // padrão 1 segundo
    }
}

const useWordManagerActions = ({ book }: UseWordIntervalProps) => {
    const [index, setCurrentWordIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isRunning, setIsRunning] = useState(true)
    const { speed,closeSettings } = useSettings() //0,1,2,3
    const [word, setWord] = useState('')
   
    function onTouchScreen(){
        closeSettings()
        if(isRunning) {
            pause()
        }
        else {
            start()
        }
    }

    useEffect(() => {
		if (book && isRunning) {
			intervalRef.current = setInterval(() => {
				setCurrentWordIndex((prevIndex) => {
					const newIndex = (prevIndex + 1) % book.content.length
					setWord(book?.content[newIndex])
					return newIndex
				})
			}, speedToInterval(speed))

			// Limpar o intervalo quando o componente for desmontado
			return () => clearInterval(intervalRef.current as NodeJS.Timeout)
		}
	}, [book, isRunning, speed])

    const start = () => {
		if (!isRunning) {
			setIsRunning(true)
		}
	}


    const pause = () => {
		if (isRunning) {
			clearInterval(intervalRef.current as NodeJS.Timeout)
			setIsRunning(false)
		}
	}

      // Função para aumentar o índice
      const nextWord = () => {
        if (book) {
            setCurrentWordIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % book.content.length;
                setWord(book?.content[newIndex]);
                return newIndex;
            });
        }
    };

    // Função para diminuir o índice
    const prevWord = () => {
        if (book) {
            setCurrentWordIndex((prevIndex) => {
                const newIndex = (prevIndex - 1 + book.content.length) % book.content.length;
                setWord(book?.content[newIndex]);
                return newIndex;
            });
        }
    };

    return { start, pause ,word,isRunning,onTouchScreen,prevWord,nextWord};
}

export default useWordManagerActions;
