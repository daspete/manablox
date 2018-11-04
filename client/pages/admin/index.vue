<template>
    <div class="admin">
        ADMIN
        <TestTemplate />
        <ContentBlock />
    </div>
</template>

<script>
import colors from '~/designsystem/tokens/colors.scss'

export default {

    middleware: 'loggedin',

    mounted(){
        console.log(colors);
    }

}
</script>
