Mock.mock("/manulist", {
    "manulist|10": [
        {
            'id': '@id',
            'name': '@cword(3,4)',
            'time': '@date',
            'endtime': '@date',
            'pris': '@integer(10,20)',
            'pl': '@integer(1,5)',
            'images': '@image(100x100,#0f0,munu)'
        }
    ]
})