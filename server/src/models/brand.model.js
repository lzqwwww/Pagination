const sql = require("./db")

function Brand(brand) {
  this.brand_logo = brand.brand_logo
  this.brand_like = brand.brand_like
  this.brang_url = brand.brang_url
  this.brand_classify = brand.brand_classify
}

Brand.brandPagination = (brand_classify, currentPage, pageSize, result) => {
  sql.query(
    `select * from brand where brand_classify='${brand_classify}' order by brand_like desc limit ${
      (currentPage - 1) * pageSize
    },${pageSize}`,
    (err, res) => {
      if (err) {
        result(err, null)
      }
      result(null, res)
    }
  )
}

Brand.getBrands = (brand_classify, result) => {
  sql.query(
    `select * from brand where brand_classify='${brand_classify}'`,
    (err, res) => {
      if (err) {
        result(err, null)
      }
      result(null, res)
    }
  )
}

module.exports = Brand
