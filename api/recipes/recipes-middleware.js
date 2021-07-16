

// const checkRecipeId = async (req, res, next) => {
//     try {
//       const existing = await db('schemes')
//         .where('scheme_id', req.params.scheme_id)
//         .first()
  
//       if (!existing) {
//         next({
//           status: 404,
//           message: `scheme with scheme_id ${req.params.scheme_id} not found`
//         })
//       } else {
//         next()
//       }
//     } catch (err) {
//       next(err)
//     }
// }