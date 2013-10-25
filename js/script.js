<script>
    $(function (){
        // Responsive layout, resizing the items
        $('#carousel1').carouFredSel({
            auto: false,
            responsive: true,
            width: '100%',      
            scroll: 1,
            prev: '#prev',
            next: '#next',
            pagination: false,
            mousewheel: false,
            swipe: {
                onMouse: true,
                onTouch: true
            },
            items: {
                width: 270,
                height: 300,   //  optionally resize item-height
                visible: {
                    min: 1,
                    max: 4
                }
            }
        });
    })
</script>