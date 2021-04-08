const Brand = require("../models/brand.model")
exports.brandPagination = (req, res) => {
  let { currentPage, pageSize } = req.query
  Brand.getBrands(req.params.brandClassify, (error, data) => {
    if (error) {
      res.status(500).send({
        message: "查询品牌数量失败",
      })
    }
    console.log(data.length)

    let pageTotal = Math.ceil(data.length / pageSize)
    Brand.brandPagination(
      req.params.brandClassify,
      currentPage,
      pageSize,
      (error, data) => {
        if (error) {
          res.status(500).send({
            message: "分页查询失败",
          })
        } else {
          res.status(200).send({
            data,
            pageTotal,
          })
        }
      }
    )
  })
}
