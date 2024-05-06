
import Conversation from "../model/Conversation.js";

export const newConversation = async(request, response) => {
    try {
        const senderId = request.body.userId;
        const receiverId = request.body.receiverId;

        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
        if(exist) {
            response.status(200).json('conversation already exists');
            return;
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });

        await newConversation.save();
        response.status(200).json('conversation saved successfully');
        return;

    } catch (error) {
        response.status(500).json(error.message);
        return;
    }
}

export const getConversation = async(request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        let conversations = await Conversation.find({ members: { $all: [receiverId, senderId]  }})
        let conversation = conversations.length > 0 ? conversations[0] : null;
        return  response.status(200).json(conversation);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
