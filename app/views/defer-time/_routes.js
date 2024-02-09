//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.post('/one-defer_01', function (req, res) {

    if (req.session.data['category_code'] != null) {//selection has been made

        res.redirect("one-defer_02")        

    } else {

        res.redirect("one-defer_01-error")

    }
})

router.post('/one-defer_01-error', function (req, res) {

    if (req.session.data['category_code'] != null) {//selection has been made

        res.redirect("one-defer_02")        

    } else {

        res.redirect("one-defer_01-error")

    }
})

router.post('/one-defer_02', function (req, res) {

    if (req.session.data['category_code'] == null) {//selection required

        res.redirect("one-defer_01-error")

    } else {

        res.redirect("one-defer_02")

    }
})

module.exports = router