function j2c_view(a,b,c,name,specs,replace,j2c_t1,j2c_t2,j2c_t3, mlt_job_loc,ri){
((a>>>16^a^b>>>16^b)&0xffff)||window.open('http://www.jobs2careers.com/click.php?jid='+(c>>>0).toString(16)+('0000000'+(b>>>0).toString(16)).slice(-8)+('0000000'+(a>>>0).toString(16)).slice(-8)+(typeof j2c_t1!='undefined'&&j2c_t1.toString()?'&t1='+j2c_t1:'')+(typeof j2c_t2!='undefined'&&j2c_t2.toString()?'&t2='+j2c_t2:'')+(typeof j2c_t3!='undefined'&&j2c_t3.toString()?'&t3='+j2c_t3:'')+(typeof mlt_job_loc!='undefined'? mlt_job_loc:'')+"&ri="+ri);
}
function j2c_m_view(a,b,c,name,specs,replace,j2c_t1,j2c_t2,j2c_t3, mlt_job_loc,ri){
((a>>>16^a^b>>>16^b)&0xffff)||window.open('http://www.jobs2careers.com/click.php?jid='+(c>>>0).toString(16)+('0000000'+(b>>>0).toString(16)).slice(-8)+('0000000'+(a>>>0).toString(16)).slice(-8)+(typeof j2c_t1!='undefined'&&j2c_t1.toString()?'&t1='+j2c_t1:'')+(typeof j2c_t2!='undefined'&&j2c_t2.toString()?'&t2='+j2c_t2:'')+(typeof j2c_t3!='undefined'&&j2c_t3.toString()?'&t3='+j2c_t3:'')+(typeof mlt_job_loc!='undefined'? mlt_job_loc:'')+"&m=1&ri="+ri);
}

function j2c_qqdlg_view(a,b,c,isMobile,j2c_t1,j2c_t2,j2c_t3, mlt_job_loc,ri){
	if(typeof J2C_QQ != 'undefined'){
		if(typeof mlt_job_loc != 'undefined') {
		 	var mlt_job_loc = decodeURIComponent(mlt_job_loc);
		    var str_index = mlt_job_loc.indexOf("=");
			mlt_job_loc = mlt_job_loc.substring(str_index+1);
			J2C_QQ_LOC( (c>>>0).toString(16)+('0000000'+(b>>>0).toString(16)).slice(-8)+('0000000'+(a>>>0).toString(16)).slice(-8)+(typeof j2c_t1!='undefined'&&j2c_t1.toString()?'&t1='+j2c_t1:'')+(typeof j2c_t2!='undefined'&&j2c_t2.toString()?'&t2='+j2c_t2:'')+(typeof j2c_t3!='undefined'&&j2c_t3.toString()?'&t3='+j2c_t3:''), 1, mlt_job_loc, 'undefined');
			
		} else {
			J2C_QQ( (c>>>0).toString(16)+('0000000'+(b>>>0).toString(16)).slice(-8)+('0000000'+(a>>>0).toString(16)).slice(-8)+(typeof j2c_t1!='undefined'&&j2c_t1.toString()?'&t1='+j2c_t1:'')+(typeof j2c_t2!='undefined'&&j2c_t2.toString()?'&t2='+j2c_t2:'')+(typeof j2c_t3!='undefined'&&j2c_t3.toString()?'&t3='+j2c_t3:''), 1);
		} 
	} else {
		var mobi = "";
		if(typeof isMobile != 'undefined' && isMobile != '')
		{
			mobi = "m=1&";
		}
		((a>>>16^a^b>>>16^b)&0xffff)||window.open('http://www.jobs2careers.com/click.php?'+mobi+'jid='+(c>>>0).toString(16)+('0000000'+(b>>>0).toString(16)).slice(-8)+('0000000'+(a>>>0).toString(16)).slice(-8)+(typeof j2c_t1!='undefined'&&j2c_t1.toString()?'&t1='+j2c_t1:'')+(typeof j2c_t2!='undefined'&&j2c_t2.toString()?'&t2='+j2c_t2:'')+(typeof j2c_t3!='undefined'&&j2c_t3.toString()?'&t3='+j2c_t3:'')+(typeof mlt_job_loc!='undefined'? mlt_job_loc:'')+(typeof ri!='undefined'?'&ri='+ri:''));
	}
}
