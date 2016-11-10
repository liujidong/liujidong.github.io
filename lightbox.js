;(function($){
		   
	var LightBox = function(){
		var self = this;
		//�������ֺ͵�����
		this.popupMask = $('<div id="G-lightbox-mask">');
		this.popupWin = $('<div id="G-lightbox-popup">');
		//����body
		this.bodyNode=$(document.body);
		//��Ⱦʣ���dom�������뵽body
		this.renderDOM();
	};
	LightBox.prototype={
		renderDOM:function(){
			var strDom='<div class="lightbox-pic-view">'+
							'<span class="lightbox-btn lightbox-prev-btn"></span>'+
							'<img class="lightbox-image" src="images/2-2.jpg" width="100%">'+
							'<span class="lightbox-btn lightbox-next-btn"></span>'+
						'</div>'+
						'<div class="lightbox-pic-caption">'+
							'<div class="lightbox-caption-area">'+
								'<p class="lightbox-pic-desc">ͼƬ����</p>'+
								'<span class="lightbox-of-index">��ǰ������0 of 0 </span>'+
							'</div>'+
							'<span class="lightbox-close-btn"></span>'+
						'</div>';
			//���뵽this.popupWin
			this.popupWin.html(strDom);
			//�����ֺ͵�������뵽body
			this.bodyNode.append(this.popupMask,this.popupWin);
			}
	};		
	window["LightBox"]=LightBox;
})(jQuery);