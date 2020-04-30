import request from '@/API/index';

export default {
  fetchAllQuestions() {
    return request.get('items');
  },
  fetchQuestion(id) {
    return request.get(`items/${id}`);
  },
  fetchAllNewQuestions() {
    return request.get('questions');
  },
  askNewQuestion(payload) {
    return request.post('questions', payload);
  },
  fetchNewQuestion(id) {
    return request.get(`/questions/${id}`);
  },
  saveQuestion(payload) {
    return request.put(`questions/${payload.id}`, {
      answerText: payload.answerText,
    });
  }
};
