import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'חבר שלי לא הזמין אותי למסיבה',
			answerOptions: [
				{ answerText: ' ...לא נורא, על זה לא תיפול החברות בינינו', isCorrect: true },
				{ answerText: 'אולי פגעתי בו… צריך לבדוק', isCorrect: false },
				{ answerText: 'אני עוד יעשה לו בית ספר', isCorrect: false },
				{ answerText: 'צבוע אחד', isCorrect: false },
			],
		},
		{
			questionText: 'חברה שלי גילתה סוד שמור שלנו',
			image: 
			answerOptions: [
				{ answerText: 'לא מספרת לה יותר שום דבר', isCorrect: false },
				{ answerText: 'צריכה לבדוק איתה. מה עבר לה בראש', isCorrect: true },
				{ answerText: 'עכשיו כל אחד ברשת ידע את כל הסודות שלה', isCorrect: false },
				{ answerText: 'הנקמה עוד תגיע', isCorrect: false },
			],
		},
		{
			questionText: 'חבר הלשין עלי שהעתקתי במבחן',
			answerOptions: [
				{ answerText: 'כואב לי. אני חייב להתרחק ממנו', isCorrect: true },
				{ answerText: 'לא מדבר איתו יותר בחיים', isCorrect: false },
				{ answerText: 'כפוי טובה. אדאג שכולם יזהרו ממנו', isCorrect: false },
				{ answerText: 'כל כלב מגיע יומו', isCorrect: false },
			],
		},
		{
			questionText: 'נכנסתי לחדר וראיתי את אמא מציצה לי ביומן',
			answerOptions: [
				{ answerText: '?איך את היית מרגישה אם הייתי מחטטת בחיים שלך', isCorrect: false },
				{ answerText: '!אל תדברי איתי.. אני הולכת מפה.. מגעילה אחת', isCorrect: false },
				{ answerText: 'אמא חטטנית, איזה דוגמה את נותנת לי', isCorrect: false },
				{ answerText: 'אם את רוצה לדעת עלי משהו, תשאלי אותי', isCorrect: true },
			],
		},
		{
			questionText: 'עובד הניקיון צעק עליי',
			answerOptions: [
				{ answerText: '?קרה משהו? אני יכול לעזור', isCorrect: true },
				{ answerText: '!חצוף! אדאג שתעוף לי מהעיניים', isCorrect: false },
				{ answerText: '?עלי אתה לא תצעק, הבנת', isCorrect: false },
				{ answerText: '...!חתיכת מלוכלך שכמוך', isCorrect: true },
			],
		},
		{
			questionText: 'קראו לי ליועצת',
			answerOptions: [
				{ answerText: 'לא בטוח שהיא פתרה את הבעיות של עצמה', isCorrect: false },
				{ answerText: 'אין בעיה, יש כמה נושאים שאני רוצה לדבר עליהם', isCorrect: true },
				{ answerText: 'לא צריך את העצות שלה… היא מן המאה הקודמת', isCorrect: false },
				{ answerText: 'קרציה אחת', isCorrect: false },
			],
		},
		{
			questionText: 'המורה שלחה אותי למנהלת',
			answerOptions: [
				{ answerText: 'אני אגיד למנהלת שהיא לא מורה…. שתדע את האמת', isCorrect: false },
				{ answerText: '!!!משעממת אחת… א-פ-ס-י-ת אחת', isCorrect: false },
				{ answerText: 'המורה צודקת. הפרעתי לה. הולכת להתנצל', isCorrect: true },
				{ answerText: 'לא משתלטת על הכיתה, המורה הזאת. מפגרת אחת', isCorrect: false },
			],
		},
		{
			questionText: '....נהג עקף אותי וכמעט גרם לתאונה של החיים ',
			answerOptions: [
				{ answerText: 'סליחה, מה קרה לך? לא חבל לך על החיים שלך', isCorrect: true },
				{ answerText: '...אני אראה לבן כלב הזה… טס אחריו', isCorrect: false },
				{ answerText: '...?מופרע … ברחת מאישפוז? לא לקחת כדורים', isCorrect: false },
				{ answerText: '...!מנוול שכמוך', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You reacted intelligently to {score} situations out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
