<template>
     <header>
       <ul>
        <slot name="ele"></slot>
        <slot name="dlzc"></slot>
        <slot name="cs"></slot>
       </ul>
   </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
header{
       
        width: 100%;
        height: 0.9rem;
        background: #3190e8;
    @media (width) {
        
    }
        ul{
            list-style: none;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            li:nth-child(1){
                padding-left: 0.2rem;
                color: white;
                line-height: 1rem
            }
             li:nth-child(2){
                 
                position: absolute;
                right: 0.3rem;
                color: white;
                
                 font-size: 0.28rem;
                span{
                    font-size: 0.3rem;
                    line-height: 0.9rem;
                   
                }
            }
            li:nth-child(3){
                 overflow: hidden;
                   text-overflow: ellipsis;
                   white-space: nowrap;
                position: absolute;
                width: 2rem;
                left: 50%;
                margin-left: -1rem;
                font-weight: 700;
                font-size: 0.37rem;
                color: white;
                line-height: 0.9rem;
            }
            
        }
    };
</style>