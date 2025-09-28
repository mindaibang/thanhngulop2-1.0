/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

interface Question {
  idiom: string;
  options: string[];
  answer: string;
  explanation: string;
  hint: string;
}

const quizData: Question[] = [
  {
    idiom: 'Ăn … nói thẳng',
    options: ['ngay', 'vội', 'đi', 'thật'],
    answer: 'ngay',
    explanation: '“Ăn ngay nói thẳng” có nghĩa là tính tình thẳng thắn, có sao nói vậy, không giấu diếm đó con.',
    hint: 'Từ này có nghĩa là làm liền, không chần chừ.'
  },
  {
    idiom: 'Có … thì nên',
    options: ['chí', 'gan', 'tiền', 'công'],
    answer: 'chí',
    explanation: '“Có chí thì nên” khuyên chúng ta hãy kiên trì, quyết tâm thì việc gì cũng sẽ thành công!',
    hint: 'Đây là điều giúp con người quyết tâm làm việc gì đó.'
  },
  {
    idiom: 'Trẻ người … dạ',
    options: ['non', 'yếu', 'dại', 'ngây'],
    answer: 'non',
    explanation: '“Trẻ người non dạ” ý nói người còn trẻ tuổi, chưa có nhiều kinh nghiệm sống.',
    hint: 'Trái ngược với “chín” hoặc “già” đó con.'
  },
  {
    idiom: 'Ác giả ác …',
    options: ['báo', 'hại', 'đến', 'về'],
    answer: 'báo',
    explanation: '“Ác giả ác báo” nghĩa là làm điều xấu thì sẽ gặp lại điều xấu.',
    hint: 'Từ này có nghĩa là nhận lại kết quả tương xứng.'
  },
  {
    idiom: 'Ăn to nói …',
    options: ['lớn', 'hay', 'khỏe', 'vang'],
    answer: 'lớn',
    explanation: '“Ăn to nói lớn” chỉ những người có tính cách mạnh mẽ, không sợ sệt.',
    hint: 'Từ này trái nghĩa với “nhỏ” nè.'
  },
  {
    idiom: 'Ân sâu, nghĩa …',
    options: ['nặng', 'dày', 'cao', 'rộng'],
    answer: 'nặng',
    explanation: '“Ân sâu, nghĩa nặng” nói về lòng biết ơn sâu sắc và tình cảm gắn bó.',
    hint: 'Từ này trái nghĩa với “nhẹ”.'
  },
  {
    idiom: 'Chân lấm tay …',
    options: ['bùn', 'đất', 'sình', 'dơ'],
    answer: 'bùn',
    explanation: '“Chân lấm tay bùn” chỉ sự vất vả, chăm chỉ lao động của người nông dân.',
    hint: 'Đây là thứ có nhiều ở ruộng lúa.'
  },
  {
    idiom: 'Ăn sung mặc …',
    options: ['sướng', 'đẹp', 'sang', 'vui'],
    answer: 'sướng',
    explanation: '“Ăn sung mặc sướng” chỉ cuộc sống đầy đủ, giàu có và thoải mái.',
    hint: 'Từ này có nghĩa là cảm thấy rất vui vẻ và thoải mái.'
  },
  {
    idiom: 'Dù ai nói ngả nói …',
    options: ['nghiêng', 'đông', 'tây', 'xiên'],
    answer: 'nghiêng',
    explanation: '“Dù ai nói ngả nói nghiêng” nghĩa là dù người khác có nói gì đi nữa, mình vẫn giữ vững ý kiến của mình.',
    hint: 'Từ này chỉ một vật không đứng thẳng.'
  },
  {
    idiom: 'Tôn sư trọng …',
    options: ['đạo', 'thầy', 'hiền', 'tài'],
    answer: 'đạo',
    explanation: '“Tôn sư trọng đạo” là một truyền thống tốt đẹp, nhắc nhở chúng ta phải kính trọng thầy cô giáo.',
    hint: 'Từ này chỉ những quy tắc, lẽ phải trong cuộc sống.'
  },
  {
    idiom: 'Chó treo mèo …',
    options: ['đậy', 'giấu', 'che', 'cất'],
    answer: 'đậy',
    explanation: '“Chó treo mèo đậy” là kinh nghiệm dân gian, khuyên chúng ta nên cất giữ đồ ăn cẩn thận để vật nuôi không ăn vụng được.',
    hint: 'Hành động dùng nắp vung để che nồi thức ăn lại.'
  },
  {
    idiom: 'Cá chép hóa …',
    options: ['rồng', 'tiên', 'thần', 'mây'],
    answer: 'rồng',
    explanation: '“Cá chép hóa rồng” nói về sự kiên trì vượt khó để đạt được thành công rực rỡ.',
    hint: 'Đây là một con vật huyền thoại có thể bay và phun lửa.'
  },
  {
    idiom: 'Trèo cao ngã …',
    options: ['đau', 'xuống', 'té', 'sâu'],
    answer: 'đau',
    explanation: '“Trèo cao ngã đau” khuyên chúng ta không nên quá kiêu ngạo, tự mãn kẻo gặp thất bại.',
    hint: 'Khi bị ngã thì mình sẽ cảm thấy thế nào nhỉ?'
  },
  {
    idiom: 'Bèo dạt mây …',
    options: ['trôi', 'bay', 'tan', 'đi'],
    answer: 'trôi',
    explanation: '“Bèo dạt mây trôi” chỉ những người có cuộc sống lênh đênh, không ổn định.',
    hint: 'Hành động của dòng nước đang chảy.'
  },
  {
    idiom: 'Anh em như thể tay …',
    options: ['chân', 'đầu', 'mình', 'người'],
    answer: 'chân',
    explanation: '“Anh em như thể tay chân” ví anh em trong nhà như các bộ phận trên cơ thể, luôn gắn bó, giúp đỡ lẫn nhau.',
    hint: 'Bộ phận này giúp chúng ta đi lại đó.'
  },
  {
    idiom: 'Con trâu là đầu …',
    options: ['cơ nghiệp', 'sự nghiệp', 'gia đình', 'nông nghiệp'],
    answer: 'cơ nghiệp',
    explanation: '“Con trâu là đầu cơ nghiệp” nhấn mạnh vai trò quan trọng của con trâu trong nông nghiệp ngày xưa.',
    hint: 'Từ này chỉ tài sản, sự nghiệp của một người.'
  },
  {
    idiom: 'Của ít lòng …',
    options: ['nhiều', 'đầy', 'vui', 'thành'],
    answer: 'nhiều',
    explanation: '“Của ít lòng nhiều” có nghĩa là món quà tuy nhỏ bé nhưng chứa đựng tình cảm to lớn.',
    hint: 'Từ này trái nghĩa với “ít” đó con.'
  },
  {
    idiom: 'Trăm công nghìn …',
    options: ['việc', 'sự', 'chuyện', 'điều'],
    answer: 'việc',
    explanation: '“Trăm công nghìn việc” chỉ có rất nhiều công việc bận rộn cần phải giải quyết.',
    hint: 'Từ này đồng nghĩa với “công chuyện”.'
  },
  {
    idiom: 'Biết người biết …',
    options: ['ta', 'mình', 'người', 'bạn'],
    answer: 'ta',
    explanation: '“Biết người biết ta” khuyên chúng ta phải hiểu rõ cả mình và đối phương để có thể thành công.',
    hint: 'Từ này là cách xưng hô của bản thân mình.'
  }
];

let currentQuestionIndex = 0;
let currentScore = 0;
let shuffledQuestions: Question[] = [];
const HIGH_SCORE_KEY = 'idiomQuizHighScore';

const questionCard = document.getElementById('question-card')!;
const questionTextEl = document.getElementById('question-text')!;
const optionsContainerEl = document.getElementById('options-container')!;
const feedbackTextEl = document.getElementById('feedback-text')!;
const nextButton = document.getElementById('next-button')!;
const completionScreen = document.getElementById('completion-screen')!;
const restartButton = document.getElementById('restart-button')!;
const currentScoreEl = document.getElementById('current-score')!;
const highScoreEl = document.getElementById('high-score')!;
const finalScoreEl = document.getElementById('final-score')!;
const newHighScoreMessageEl = document.getElementById('new-high-score-message')!;


function loadHighScore() {
    const highScore = localStorage.getItem(HIGH_SCORE_KEY) ?? '0';
    highScoreEl.textContent = highScore;
    return parseInt(highScore, 10);
}

function startQuiz() {
    shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    currentScore = 0;
    currentScoreEl.textContent = '0';
    loadHighScore();
    
    completionScreen.classList.add('hidden');
    newHighScoreMessageEl.classList.add('hidden');
    questionCard.classList.remove('hidden');
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showCompletionScreen();
        return;
    }

    const question = shuffledQuestions[currentQuestionIndex];
    questionTextEl.textContent = question.idiom;
    optionsContainerEl.innerHTML = '';
    feedbackTextEl.textContent = '';
    nextButton.classList.add('hidden');

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-button';
        button.setAttribute('aria-label', `Lựa chọn ${option}`);
        button.onclick = () => selectAnswer(option, question);
        optionsContainerEl.appendChild(button);
    });
}

function selectAnswer(selectedOption: string, question: Question) {
    const isCorrect = selectedOption === question.answer;
    
    Array.from(optionsContainerEl.children).forEach(btn => {
        const button = btn as HTMLButtonElement;
        button.disabled = true;
        if (button.textContent === question.answer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        currentScore++;
        currentScoreEl.textContent = currentScore.toString();
        feedbackTextEl.innerHTML = `🎉 Giỏi quá! Con trả lời đúng rồi! <br/> <em>${question.explanation}</em>`;
    } else {
        feedbackTextEl.innerHTML = `😅 Chưa đúng, con thử lại nhé! <br/> <em>Gợi ý nhỏ: ${question.hint}</em>`;
    }

    nextButton.classList.remove('hidden');
}

function showCompletionScreen() {
    questionCard.classList.add('hidden');
    completionScreen.classList.remove('hidden');
    finalScoreEl.textContent = currentScore.toString();

    const highScore = loadHighScore();
    if (currentScore > highScore) {
        localStorage.setItem(HIGH_SCORE_KEY, currentScore.toString());
        newHighScoreMessageEl.classList.remove('hidden');
        highScoreEl.textContent = currentScore.toString();
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    displayQuestion();
});

restartButton.addEventListener('click', startQuiz);

// Start the quiz when the page loads
startQuiz();