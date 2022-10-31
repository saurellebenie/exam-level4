<template>
    <div>
        <form>
            <div class="amount-info">
                <div class="donate-amount">$20</div>
                <div class="donate-amount">$50</div>
                <div class="donate-amount">$200</div>
            </div>
            <div class="payment-method-wrp flex items-center">
                <h4>Payment Method:</h4>
                <div class="payment-method flex">
                    <div class="payment-type flex items-center">
                       <div class="orange"><img src="../../assets/téléchargement.png" alt=""></div>
                       <div class="mtn"><img src="../../assets/pngfind.com-mountain-dew-logo-png-280910.png" alt=""></div>
                    </div> 
                </div>
            </div>
            <div class="personal-info">
                <h4>Personal Info:</h4>
                <div class="flex flex-wrap  row-gutter-20">
                    <div class="md:w-1/2 pr-4 pl-4">
                        <div class="mb-4"><input type="text" name="con_name" placeholder="Name"
                                class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></div>
                    </div>
                    <div class="md:w-1/2 pr-4 pl-4">
                        <div class="mb-4"><input type="email" name="con_email" placeholder="Email"
                                class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></div>
                    </div>
                    <div class="md:w-1/2 pr-4 pl-4">
                        <div class="mb-4"><input type="text" name="con_phone" placeholder="Phone"
                                class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></div>
                    </div>
                    <div class="md:w-1/2 pr-4 pl-4">
                        <div class="mb-4"><input type="text" name="con_address" placeholder="Address"
                                class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></div>
                    </div>
                    <div class="md:w-full pr-4 pl-4">
                        <div class="mb-4 mb-0"><textarea name="con_message" placeholder="Message"
                                class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded textarea"></textarea></div>
                    </div>
                </div>
            </div>
            <div class="btn-wrp flex"><a href="#" class="btn-theme btn-gradient btn-slide">Donate Now <img
                        src="/images/icons/arrow-line-right2.png" alt="Icon" class="icon icon-img"></a> <a href="#"
                    class="btn-theme btn-gradient btn-border">Total Donation: $50</a></div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    axios
      .get('')
      
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,700);


form{
    width: 50%;
    margin: 0 auto;
}
form .amount-info {
    display: flex;
    margin-bottom: 40px;
} 
form .amount-info .donate-amount {
    background-color: #001d23;
    border: 2px solid #203438;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    height: 58px;
    line-height: 58px;
    margin-right: 20px;
    min-width: 95px;
    text-align: center;
    transition: .3s;
}


 form .amount-info .donate-amount.donate-custom-amount {
    max-width: 180px;
    min-width: 180px;
    margin-right: 0;
}


 form .btn-wrp .btn-theme:first-child {
    margin-left: 0;
}
 form .btn-wrp .btn-theme {
    margin-left: 20px;
}
.payment-method img{
    width: 50px;
}
</style>