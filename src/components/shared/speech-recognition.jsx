import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognitionComponent = ({ handleModalVisible, handleAdd }) => {
	// const [message, setMessage] = useState('');
	const listenContinuously = () =>
		SpeechRecognition.startListening({
			continuous: true,
			language: 'en-GB',
		});

	// const stop = () => {
	// 	SpeechRecognition.stopListening();
	// };

	useEffect(() => {
		listenContinuously();
	}, []);

	const commands = [
		{
			command: 'create',
			callback: () => handleModalVisible(true),
			matchInterim: true,
		},
		{
			command: 'save',
			callback: () => handleAdd(),
			matchInterim: true,
		},
	];

	const { transcript } = useSpeechRecognition({ commands });

	if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
		return null;
	}

	return <>{/* <div>
				<p>{message}</p>
				<p>{transcript}</p>
			</div> */}</>;
};
export default SpeechRecognitionComponent;
