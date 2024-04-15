const Message = require('../models/message.model');
const Conversation = require('../models/conversation.model');

class MessagesService {
    async createMessage(senderId, receiverId, message) {
        return await Message.create({
            senderId,
            receiverId,
            message
        });
    }

    async getConversationByIds(senderId, receiverId) {
        return await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});
    }

    async getConversationWithPopulate(senderId, userToChatId, populateField) {
        return await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate(populateField);
    }

    async createConversation(senderId, receiverId) {
        return await Conversation.create({
            participants: [senderId, receiverId],
        });
    }
}

module.exports = new MessagesService();