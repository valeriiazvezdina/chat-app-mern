const MessagesService = require('../services/messages.service');

class MessagesController {
    async getMessages(req, res) {
        try {
            const userToChatId = req.params.id;
            const senderId = req.userId;

            const conversation = await MessagesService.getConversationWithPopulate(senderId, userToChatId, 'messages');
             
            if (!conversation) return res.status(200).json([]);

            const messages = conversation.messages;

            res.status(200).json(messages);
        } catch(error) {
            console.log('Error in getting messages', error);
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    async sendMessage(req, res) {
        try {
            const { message } = req.body;
            const receiverId = req.params.id;
            const senderId = req.userId;

            let conversation = await MessagesService.getConversationByIds(senderId, receiverId);
    
            if (!conversation) {
                conversation = await MessagesService.createConversation(senderId, receiverId);
            }
    
            const newMessage = await MessagesService.createMessage(senderId, receiverId, message);
    
            if (newMessage) {
                conversation.messages.push(newMessage._id);
            }

            await Promise.all([ conversation.save(), newMessage.save() ]);

            res.status(201).json(newMessage);
        } catch(error) {
            console.log('Error in sending message', error);
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    }
}

module.exports = new MessagesController();