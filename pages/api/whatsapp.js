import { connectToDatabase } from '../../util/mongodb'
export default async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const groupData = await db.collection('whatsapp').find({}).toArray()
    if (groupData[0].users > 260) {
      const updatedUserCount = 0
      await db
        .collection('whatsapp')
        .updateOne(
          { _id: groupData[0]._id },
          { $set: { group: groupData[0].group + 1, users: updatedUserCount } }
        )
    } else {
      const updatedUserCount = groupData[0].users + 1
      await db
        .collection('whatsapp')
        .updateOne(
          { _id: groupData[0]._id },
          { $set: { users: updatedUserCount } }
        )
    }
    const updatedGroupData = await db.collection('whatsapp').find({}).toArray()
    res.json(updatedGroupData[0])
  } catch (err) {
    console.log(err)
  }
}
