$(document).ready(function () {
	$('.inputPreview').keyup(function(){
		var $this = $(this);
		$('.'+$this.attr('id')+'').html($this.val());
	 });

	 var qty = parseInt($('#productQty').html());
	 console.log(qty)
	$('.priceLiveCalc').keyup(function(){		
		var taxes = parseInt($('#ivaPercentage').val());
		var unitPrice = parseFloat($('#unitPrice').val());
		var totalGrossPrice = qty*unitPrice;
		var ivaValue = totalGrossPrice*taxes/100;
		var serviceCost = totalGrossPrice*5/100;
		var totalPrice = totalGrossPrice+ivaValue;
		var taxWithHold = 0;
		if(totalPrice > 980000.0){
			taxWithHold = totalGrossPrice*2.5/100;
		}
		
		$('#totalGrossPrice').html(Intl.NumberFormat('de-DE').format(totalGrossPrice.toFixed(2)));
		$('#ivaVal').html(Intl.NumberFormat('de-DE').format(ivaValue.toFixed(2)));
		$('#totalPrice').html(Intl.NumberFormat('de-DE').format(totalPrice.toFixed(2)));
		$('#taxHolding').html(Intl.NumberFormat('de-DE').format(taxWithHold.toFixed(2)));
		$('#serviceCost').html(Intl.NumberFormat('de-DE').format(serviceCost.toFixed(2)));	
		$('#sellerIncome').html(Intl.NumberFormat('de-DE').format((totalGrossPrice-(taxWithHold+serviceCost)).toFixed(2)));	
	});
	$("#tableSearch").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#contentTable tr").filter(function() {
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
 });

