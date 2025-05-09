type T_I18N_LNG = 'en-US' | 'zh-CN';
type T_I18N_Item =
  | 'com-ok'
  | 'com-cancel'
  | 'com-404'
  | 'com-404-desc'
  | 'biz-buy-btn'
  | 'biz-goods-sales'
  | 'biz-select-product'
  | 'biz-product-details'
  | 'biz-buy-now'
  | 'biz-order-middle-desc'
  | 'biz-goods-common-label-anquanzhifu'
  | 'biz-goods-common-label-jishifahuo'
  | 'biz-goods-common-label-24-cs'
  | 'biz-footer-notes-title-security'
  | 'biz-footer-notes-content-security'
  | 'biz-footer-notes-title-payment'
  | 'biz-footer-notes-content-payment'
  | 'biz-footer-notes-title-freight'
  | 'biz-footer-notes-content-freight'
  | 'biz-footer-notes-title-returns'
  | 'biz-footer-notes-content-returns'
  | 'biz-footer-notes-title-privacy-policy'
  | 'biz-footer-notes-content-privacy-policy'
  | 'biz-footer-notes-title-help'
  | 'biz-footer-notes-content-help'
  | 'xxx';

export const i18n: Record<T_I18N_LNG, Record<T_I18N_Item, string>> = {
  'en-US': {
    'com-ok': 'ok',
    'com-cancel': 'cancel',
    'com-404': '404',
    'com-404-desc': '404',
    'biz-buy-btn': 'Buy',
    'biz-goods-sales': 'Sales',
    'biz-select-product': 'Select Product',
    'biz-product-details': 'product details',
    'biz-buy-now': '${price} Buy Now',
    'biz-order-middle-desc':
      'Due to third-party recharge risk control restrictions, USDT is currently the only recharge method available. Please transfer recharge to the corresponding wallet and the recharge will be automatically credited after successful recharge.',
    'biz-goods-common-label-anquanzhifu': 'Secure and Fast Payment',
    'biz-goods-common-label-jishifahuo': 'Instant Delivery',
    'biz-goods-common-label-24-cs': '24h Online Service',
    'biz-footer-notes-title-security': 'Information Security',
    'biz-footer-notes-content-security': '-',
    'biz-footer-notes-title-payment': 'Payment method',
    'biz-footer-notes-content-payment': '-',
    'biz-footer-notes-title-freight': 'Shipping Policy',
    'biz-footer-notes-content-freight': '-',
    'biz-footer-notes-title-returns': 'Returns & Exchange Policy',
    'biz-footer-notes-content-returns': '-',
    'biz-footer-notes-title-privacy-policy': 'Privacy Policy',
    'biz-footer-notes-content-privacy-policy': '-',
    'biz-footer-notes-title-help': 'User Guide',
    'biz-footer-notes-content-help': '-',
    xxx: '',
  },
  'zh-CN': {
    'com-ok': '确认',
    'com-cancel': '取消',
    'com-404': '404',
    'com-404-desc': '404',
    'biz-buy-btn': '购买',
    'biz-goods-sales': '月售',
    'biz-select-product': '选择商品',
    'biz-product-details': '商品详情',
    'biz-buy-now': '¥{price} 立即购买',
    'biz-order-middle-desc':
      '由于第三方充值风控限制，目前只能USDT充值，请针对相应钱包进行转账充值，充值成功自动到账。',
    'biz-goods-common-label-anquanzhifu': '安全快捷支付',
    'biz-goods-common-label-jishifahuo': '即时发货',
    'biz-goods-common-label-24-cs': '24小时客服',
    'biz-footer-notes-title-security': '信息安全说明',
    'biz-footer-notes-content-security':
      '<p>加密技术： 平台采用先进的加密算法对用户的个人数据进行加密，无论是在数据传输过程中还是在存储时。例如，使用 AES-256 加密来保护用户的姓名、地址、支付信息等敏感数据，确保只有授权人员能够解密和访问这些信息。</p><p>严格的访问控制： 建立了严格的访问权限体系，只有经过授权的员工，并且在特定的业务需求下，才能访问用户的隐私数据。例如，客服人员在处理用户问题时，只能查看与问题相关的有限数据，且其操作会被详细记录和监控。</p><p>数据最小化原则： 平台只收集和存储为提供服务所必需的用户数据，避免过度收集用户的个人信息。比如，在用户注册时，仅要求提供必要的基本信息，如用户名/手机号和密码，而不会索要过多无关的个人细节。</p><p>定期的安全审计： 定期进行内部和外部的安全审计，以发现和解决可能存在的隐私漏洞。例如，聘请专业的安全机构对平台的隐私保护措施进行评估和测试。</p><p>用户教育与通知： 通过清晰明确的隐私政策向用户详细说明数据的收集、使用和保护方式，并在有重大隐私政策变更时及时通知用户。同时，提供用户隐私保护的教育资源，帮助用户增强自我保护意识。</p><p>匿名化和假名化处理： 在某些情况下，对用户数据进行匿名化或假名化处理，使得即使数据被意外泄露，也无法直接关联到具体的用户身份。</p><p>安全的服务器和基础设施： 投资于高度安全的服务器和网络基础设施，防止黑客攻击和数据窃取。例如，采用防火墙、入侵检测系统等防护措施来保障服务器的安全。</p><p>合规性遵循： 确保平台的隐私保护措施符合相关的法律法规，如《通用数据保护条例》（GDPR）等，以提供合法且可靠的隐私保护。</p>',
    'biz-footer-notes-title-payment': '支付说明',
    'biz-footer-notes-content-payment': '<p>支持支付宝，微信，币安等全球主流支付方式</p>',
    'biz-footer-notes-title-freight': '运费说明',
    'biz-footer-notes-content-freight':
      '<p>本站点属于虚拟商品发货，不存在实际物料和运费情况<br>所有商品购买付款后，都会在付款后的页面展示购买的账密或者卡密，也可以在查单系统输入订单号查询<br><br>免邮条件说明：<br>本站点商品均免邮发货<br><br>不同国家/地区运费信息：<br>亚洲地区用户不需要运费<br>欧洲<span style="text-wrap: wrap;">地区用户不需要运费<br></span>非洲<span style="text-wrap: wrap;">地区用户不需要运费<br></span>大洋洲<span style="text-wrap: wrap;">地区用户不需要运费<br></span>美洲<span style="text-wrap: wrap;">地区用户不需要运费</span></p>',
    'biz-footer-notes-title-returns': '退换货说明',
    'biz-footer-notes-content-returns':
      '<p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">感谢您对本平台的支持，平台退款政策遵循以下前提：</span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">1.虚拟商品一经出售，非商品本身问题，不支持任何理由退款。<span microsoft=""font-size:=""color:=""style="box-sizing: border-box; margin: 0px; padding: 0px;">*商品本身问题解释：如购买的商品无法使用、信息错误、首次使用提示被封禁。</span></span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">2.如遇到商品问题，可以直接联系平台客服进行解决，或者请致电/邮箱联系我们。</span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">3.<span style="box-sizing: border-box; margin: 0px; padding: 0px; font-family: Arial;">如果您使用的是信用卡，PayPal会将退款存入您的信用卡中。如果您使用的是信用卡以外的资金来源，退款将会存入您的PayPal账户余额。如</span></span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">果您既使用了信用卡又使用了其他来源，则信用卡支付的部分将存入信用卡，剩余部分将存入您的PayPal账户余额。请注意，存入信用卡的退款</span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-family: Arial;">最多可能需要30天才会显示在您的账单上,</span><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold; color: rgb(255, 0, 0); font-family: Arial;">具体时间以银行的处理时间为准</span></span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold; color: rgb(255, 0, 0);"><br style="box-sizing: border-box; margin: 0px; padding: 0px;"></span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;"></span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">常见问题</span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">1.买错了/不想要了可以退款吗？<br style="box-sizing: border-box; margin: 0px; padding: 0px;"></span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">很抱歉这种情况是不支持退款的。</span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">2.退款的金额怎么给我？</span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">订单退款成功后，会原路退回到您的支付账户里。</span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">3.退款需要手续费吗？</span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;"><span microsoft=""style="box-sizing: border-box; margin: 0px; padding: 0px;">不需要任何费用，您可以放心。</span></p><p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px;">退换货联系方式：<br>1，您可以联系在线客服申请退换货<br>2，您可以联系邮箱<a href="http://xiaoying202399@gmail.com"target="_blank">xiaoying202399@gmail.com</a>申请退换货<br><br><br>退换货运费说明：<br>不需要运费和手续费<br><br>退换货运费承担方：<br>我方承担退换货运费<br><br><br></p><p><br></p>',
    'biz-footer-notes-title-privacy-policy': '隐私政策',
    'biz-footer-notes-content-privacy-policy': `<p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们收集的信息</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们珍视您对我们提供个人信息的信任。</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">不会出于非营销目的与其他非关联公司或组织分享、披露或出售在</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">网站上收集到的任何个人身份信息（如您的姓名、地址、电话号码或电子邮件地址）。由于这些信息是我们业务的重要组成部分，因此在合并、出售或其他公司重组或法律程序中，这些信息将与我们的其他资产一样得到处理。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">通过使用我们的服务（定义见我们的使用条款），您承认并同意您接受以下规定的做法、要求和</span>
                                        /<span style="font-family:宋体">或政策，并在此同意我们收集、使用、披露和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或处理您的个人数据。如果您不同意处理您的个人数据，您可能无法使用我们的服务，也无法完全访问我们的平台（定义见我们的使用条款）。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们为何收集您的数据</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">出于以下目的收集您的数据：</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        1. <span style="font-family:宋体">为履行我们与您签订的协议，提供相关内容和服务；</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        2. <span style="font-family:宋体">为履行我们可能承担的法律义务所必需；和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        3. <span style="font-family:宋体">在您同意的情况下。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们有责任保护儿童的隐私</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">保护儿童隐私尤为重要。</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">也不会在公司的任何网站上向</span>
                                        13 <span style="font-family:宋体">岁以下的儿童推销或有意收集他们的个人信息。如果我们发现我们在未核实父母同意的情况下收集了 </span>
                                        <span style="font-family:Calibri">13 </span>
                                        <span style="font-family:宋体">岁以下儿童的个人信息，我们会采取措施删除这些信息。如果您照顾的 </span>
                                        <span style="font-family:Calibri">13 </span>
                                        <span style="font-family:宋体">岁以下儿童的个人信息被披露给 </span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">，您在此同意对该儿童的个人信息进行处理，并代表该儿童接受并同意受本政策的约束。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们何时收集您的个人信息？</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们可能在以下情况下直接收集您的个人信息：</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        1. <span style="font-family:宋体">注册和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或使用我们的服务或平台；</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        2. <span style="font-family:宋体">链接您的社交媒体或其他外部账户，在我们这里注册账户；</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        3. <span style="font-family:宋体">与我们沟通（包括但不限于通过我们的在线客服聊天、信件、传真、电话（可能会录音）、面对面会议、社交媒体平台、电子邮件等方式与您联系）；</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        4. <span style="font-family:宋体">注册或订阅特定产品和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或服务或我们的出版物（例如新闻简报）；</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        5. <span style="font-family:宋体">参与我们的任何调查；</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        6. <span style="font-family:宋体">参加由 </span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">举办</span>
                                        /<span style="font-family:宋体">组织的任何活动、营销计划；</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        7. <span style="font-family:宋体">登记对我们产品和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或服务的兴趣和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或索取信息（通过我们的在线门户或其他可用渠道）或订阅我们的产品和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或服务；</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        8. <span style="font-family:宋体">回应我们发送的任何营销材料；</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        9. <span style="font-family:宋体">访问或浏览我们的网站</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        10. <span style="font-family:宋体">向我们提出投诉；</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        11. <span style="font-family:宋体">以任何方式向我们提供反馈；和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        12. <span style="font-family:宋体">出于任何原因向我们提交您的个人数据。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">除直接从您那里获得的个人信息（如上所述）外，我们还可能从与我们打交道或与您有关联的第三方（信用咨询机构或金融机构）那里获得您的个人信息，以及在您同意披露与您有关的信息和</span>
                                        /<span style="font-family:宋体">或在法律允许的情况下从其他来源获得您的个人信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们如何收集您的个人信息？</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">通过在线询问的方式收集信息，例如，当您订购服务、申请工作或响应调查、优惠或其他促销活动时。客户的姓名、地址（邮政地址和电子邮件地址）和电话号码是最重要的信息，但我们可能会根据所订购或推广的服务等要求您提供其他信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        Cookies<span style="font-family:宋体">： </span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">还可能使用</span>
                                        "cookies "<span style="font-family:宋体">和类似技术来获取有关您访问我们网站的信息或您对我们电子邮件的回复</span>
                                        <span style="font-family:Calibri">--</span>
                                        <span style="font-family:宋体">既包括单独的信息，也包括不会识别您身份的汇总数据。这些报告工具会告诉我们您对我们网站或电子邮件的哪些部分感兴趣或采取了某些行动，并帮助我们提高网站的质量和实用性。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">内容：</span>
                                        <span style="font-family:宋体">您在网站上发布的内容也会为我们提供信息。您的内容（如评论、照片和视频）以及有关您内容的元数据将被其他用户查看。</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">可以但没有义务监控您在网站上发布的内容。我们可以以任何理由或无理由删除您发布的任何信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">付款方式：</span>
                                        <span style="font-family:宋体">根据您在访问、购买或订阅我们的产品或服务时所选择的付款方式，我们也会要求您提交个人信息。例如，如果您选择用信用卡支付产品</span>
                                        /<span style="font-family:宋体">服务费用，则需要向我们提供您的信用卡发卡机构名称、信用卡号、账单地址、</span>
                                        <span style="font-family:Calibri">CVV </span>
                                        <span style="font-family:宋体">号和有效期。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">日志文件：</span>
                                        <span style="font-family:宋体">当您使用本网站时，我们的服务器会自动记录您的网络浏览器发送的某些信息。这些服务器日志可能包括以下信息：您的网络请求、互联网协议（</span>
                                        "IP"<span style="font-family:宋体">）地址、浏览器类型、引用</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">退出页面和 </span>
                                        <span style="font-family:Calibri">URL</span>
                                        <span style="font-family:宋体">、点击次数以及您与网站链接的交互方式、域名、登陆页面、浏览页面、移动运营商以及其他此类信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">地理位置信息：</span>
                                        <span style="font-family:宋体">当您使用移动设备或通过移动设备使用本网站时，我们可能会访问、收集、监控和</span>
                                        /<span style="font-family:宋体">或远程存储 </span>
                                        <span style="font-family:Calibri">"</span>
                                        <span style="font-family:宋体">位置数据</span>
                                        <span style="font-family:Calibri">"</span>
                                        <span style="font-family:宋体">，其中可能包括 </span>
                                        <span style="font-family:Calibri">GPS </span>
                                        <span style="font-family:宋体">坐标（例如纬度和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或经度）或有关您移动设备位置的类似信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">设备：</span>
                                        <span style="font-family:宋体">当您使用</span>
                                    </span>
                                    <span style="font-family: 宋体;font-size: 16px">
                                        <span style="font-family:Calibri">AccountBoy</span>
                                    </span>
                                    <span style="font-family: Calibri;font-size: 16px">.com</span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">时，我们可能会收集有关您设备的信息，如设备类型、设备硬件信息、操作系统类型和版本、设备时间和时区以及其他必要信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">第三方工具：</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">使用第三方分析工具来帮助了解网站的使用情况。其中许多工具会收集由您的浏览器作为网页请求的一部分发送的信息，包括</span>
                                        cookie <span style="font-family:宋体">和您的 </span>
                                        <span style="font-family:Calibri">IP </span>
                                        <span style="font-family:宋体">地址。这些分析工具也会接收这些信息，它们对这些信息的使用受其隐私政策的约束。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">您明确提交的其他数据：</span>
                                        <span style="font-family:宋体">当您张贴、评论或关注我们的任何内容和服务，或通过我们内置的在线聊天系统发送信息，或就我们的任何请求或支持或购买我们的产品和服务向我们提供信息，或参与我们的比赛、竞赛和锦标赛时，我们可能会收集您的此类信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们将收集哪些个人数据？</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">您向我们披露的个人信息</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们收集的个人信息取决于您与我们和服务的互动背景、您做出的选择以及您使用的产品和功能。我们收集的个人信息可能包括以下内容：</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        1. <span style="font-family:宋体">姓名</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        2. <span style="font-family:宋体">电子邮件地址</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        3. <span style="font-family:宋体">电话号码</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        4. <span style="font-family:宋体">出生日期</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        5. <span style="font-family:宋体">邮寄和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或账单地址</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        6. <span style="font-family:宋体">用户名</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        7.<span style="font-family:宋体">密码</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        8. <span style="font-family:宋体">联系方式</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        9. <span style="font-family:宋体">借记卡</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">信用卡卡号</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        10. <span style="font-family:宋体">财务信息（例如：借记卡或信用卡卡号的最后四位数字、账单历史、账单地址、卡的类型、发卡银行、有效期、卡的来源国）</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        11. <span style="font-family:宋体">在线调查记录和详情</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        12. <span style="font-family:宋体">对我们营销活动和产品的兴趣</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        13. cookie <span style="font-family:宋体">偏好</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">敏感信息。必要时，经您同意或适用法律允许，我们会处理以下类别的敏感信息：</span>
                                        - <span style="font-family:宋体">财务数据</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">社交媒体登录数据。我们可能会向您提供使用现有社交媒体帐户详细信息（如</span>
                                        Facebook<span style="font-family:宋体">、</span>
                                        <span style="font-family:Calibri">Twitter </span>
                                        <span style="font-family:宋体">或其他社交媒体帐户）在我们这里注册的选项。如果您选择以这种方式注册，我们将从您的社交媒体提供商处收到您的某些个人资料信息。我们收到的个人资料信息可能因相关社交媒体提供商而异，但通常包括您的姓名、电子邮件地址、好友列表和个人照片，以及您选择在此类社交媒体平台上公开的其他信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们如何使用您的信息</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">使用在线收集的个人身份信息主要是为了向您提供以下服务：</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        1. <span style="font-family:宋体">处理您的订单和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或交易</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        2. <span style="font-family:宋体">管理您对我们服务的使用，包括但不限于记住您的喜好</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        3. <span style="font-family:宋体">用于识别、验证、尽职调查或了解客户的目的</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        4. <span style="font-family:宋体">处理或促进客户服务、执行您的指示、处理或回复您或代表您提出的询问</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        5. <span style="font-family:宋体">为了管理您与我们的关系或您对我们服务的使用，通过语音电话、短信、电子邮件和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或邮寄或其他方式与您联系。这包括让我们向您介绍您可能感兴趣的其他产品。例如，通过邮寄和电子邮件地址信息，我们可以就所提供和订购的服务进行沟通，并对这些服务进行适当的供应和计费。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        6. <span style="font-family:宋体">开展研究、分析和开发活动（包括但不限于数据分析、调查、产品和服务开发和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或特征分析），以分析您如何使用我们的服务，推荐您感兴趣的产品和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或服务，改进我们的服务和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或提升您的客户体验</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        7. <span style="font-family:宋体">响应法律程序或遵守任何相关司法管辖区的任何适用法律、政府或监管要求，或我们有充分理由相信根据任何适用法律进行此类披露是必要的。这包括但不限于对传票和其他法律要求的回应，以及我们认为有必要披露这些信息以识别、联系或对可能危害公共安全或干扰 </span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">服务或我们的客户或其他人使用这些服务的个人采取法律行动的情况。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        8. <span style="font-family:宋体">处理和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或促进资产出售交易或潜在资产出售交易，此类交易涉及作为参与者的 </span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">，或涉及作为参与者的</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">关联公司或附属机构，并且可能有其他第三方组织参与此类交易。资产出售交易</span>
                                        "<span style="font-family:宋体">是指购买、出售、租赁、合并、兼并或以任何其他方式收购、处置或资助一 个组织或该组织的一部分或该组织的任何业务或资产。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        9. <span style="font-family:宋体">侦查、调查和预防欺诈、欺骗和其他违法行为所必需的数据。这些数据仅用于发现、调查和预防此类违规行为，并在适用的情况下采取相应的行动，其存储时间仅限于此目的所需的时间。如果这些数据显示出违规迹象，我们将在必要时为确立、行使或维护法律索赔而保存这些数据。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        10 .<span style="font-family:宋体">我们在征得您同意时通知您的任何其他目的</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">在任何时候，如果您认为有必要退出未来与</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">的通信，我们都会为您提供退出通信信息的选项。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们依据哪些法律依据处理您的信息</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">如果您位于欧盟或英国，本节适用于您</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">《通用数据保护条例》（</span>
                                        GDPR<span style="font-family:宋体">）和《英国数据保护条例》（</span>
                                        <span style="font-family:Calibri">UK GDPR</span>
                                        <span style="font-family:宋体">）要求我们解释处理您的个人信息所依据的有效法律依据。因此，我们可能依据以下法律依据处理您的个人信息：</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">同意。如果您允许我们出于特定目的使用您的个人信息，我们可能会处理您的信息。您可以随时撤销同意。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">履行合同。如果我们认为有必要履行对您的合同义务，包括提供服务，或者在与您签订合同之前应您的要求，我们可能会处理您的个人信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">合法权益。当我们认为有合理必要实现我们的合法商业利益时，我们可能会处理您的信息，且这些利益不会超过您的利益以及基本权利和自由。例如，我们可能会出于上述某些目的处理您的个人信息，以便</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        1. <span style="font-family:宋体">向用户发送有关我们产品和服务的特别优惠和折扣信息</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        2. <span style="font-family:宋体">为我们的用户开发和显示个性化的相关广告内容</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        3. <span style="font-family:宋体">分析我们服务的使用情况，以便我们改进服务，吸引和留住用户</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        4. <span style="font-family:宋体">支持我们的营销活动</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        5. <span style="font-family:宋体">诊断问题和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或防止欺诈活动</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        6. <span style="font-family:宋体">了解用户如何使用我们的产品和服务，从而改善用户体验</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">法律义务。当我们认为有必要履行我们的法律义务时，我们可能会处理您的信息，例如与执法机构或监管机构合作，行使或捍卫我们的合法权利，或在我们参与的诉讼中披露您的信息作为证据。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">重大利益。如果我们认为有必要保护您或第三方的重大利益，例如涉及对任何人安全的潜在威胁，我们可能会处理您的信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">如果您位于加拿大，本节适用于您</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">如果您明确允许我们将您的个人信息用于特定目的，或者在可以推断出您的允许的情况下，我们可能会处理您的信息。您可以随时撤销同意。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">在某些特殊情况下，适用法律可能允许我们在未经您同意的情况下处理您的信息，例如：</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        1. <span style="font-family:宋体">如果收集信息明显符合个人利益，且无法及时获得同意</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        2. <span style="font-family:宋体">用于调查、欺诈检测和预防</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        3. <span style="font-family:宋体">用于满足特定条件的商业交易</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        4. <span style="font-family:宋体">如果信息包含在证人证词中，且收集信息是评估、处理或解决保险索赔所必需的</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        5. <span style="font-family:宋体">用于确认受伤、生病或死亡人员的身份以及与近亲联系</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        6. <span style="font-family:宋体">如果我们有合理理由相信某人曾经是、现在是或可能是财务滥用的受害者</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        7. <span style="font-family:宋体">有理由认为在征得同意的情况下收集和使用信息会影响信息的可用性或准确性，且收集信息的合理目的是为了调查违反协议的行为或违反加拿大或某省法律的行为</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        8. <span style="font-family:宋体">如果披露信息是为了遵守传票、搜查令、法院命令或与出示记录有关的法院规则的要求</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        9. <span style="font-family:宋体">如果信息是个人在工作、业务或职业过程中提供的，且收集信息的目的与提供信息的目的一致</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        10. <span style="font-family:宋体">如果收集信息完全是为了新闻、艺术或文学目的</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        11. <span style="font-family:宋体">如果该信息可公开获取，并由法规规定</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们保存您的数据的时间</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们将在实现收集和处理您的信息的目的所需的时间内保存您的信息，或者在任何适用法律要求延长保存时间的情况下。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">如果您终止您在我们这里的账户，所有个人数据都将被删除，除非法律程序要求或</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">认为必要的任何其他合法理由。如果您不再同意处理您孩子的个人数据，我们将根据您的同意毫不延迟地删除个人数据。如果您选择反对处理您的个人数据，我们将在合理期限内删除您的数据，除非法律要求保留相同数据。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们的要求</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们要求您向我们提供准确完整的个人信息，包括您本人以及您向我们提供个人信息的任何其他人的信息，并在信息不正确或过时时联系我们进行更新。这项义务是我们向您和</span>
                                        /<span style="font-family:宋体">或您或您的组织</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">公司授权或允许使用产品和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或服务的任何其他人提供产品和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或服务的条件。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们承诺隐私和安全</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">我们双方在防范网上欺诈方面共同发挥着重要作用。您应小心谨慎，确保您的用户</span>
                                        ID<span style="font-family:宋体">、密码、安全设备和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或安全代码等任何信息不会泄露，确保您不会故意或意外分享、提供或协助他人未经授权使用这些信息。请勿与他人共享您的用户 </span>
                                        <span style="font-family:Calibri">ID</span>
                                        <span style="font-family:宋体">、密码、安全设备和</span>
                                        <span style="font-family:Calibri">/</span>
                                        <span style="font-family:宋体">或安全代码，或允许他人访问或使用这些信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">在</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">，我们使用加密、防火墙及其他技术和安全程序来帮助保护您个人信息的准确性和安全性，并防止未经授权的访问或不当使用。例如，您会注意到在使用</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">网站的某些功能时，您需要提交密码或其他类型的验证信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">如果您点击第三方网站的链接，您将离开我们的平台，我们无法控制或认可第三方网站上的内容。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">您的权利</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">位于某些国家（包括欧洲经济区和英国）的个人对其个人数据享有某些法定权利。除法律规定的豁免情况外，您有权要求访问您的个人数据，并有权要求更新、删除或更正这些信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">如果您的个人数据的处理受《一般数据保护条例》（或英国有关个人数据处理的适用法律）的约束，</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">将依据上述合法权益处理您的数据。</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">还可能出于直接营销的目的处理您的个人数据，您有权在任何时候反对我们出于此目的使用您的个人数据。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">披露您的信息（如有需要）</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">除上述情况外，当您出于特定目的向我们提供个人信息时，我们可能会与第三方供应商、服务提供商、承包商或代理商（</span>
                                        "<span style="font-family:宋体">第三方</span>
                                        <span style="font-family:Calibri">"</span>
                                        <span style="font-family:宋体">）共享您的数据，他们为我们或代表我们提供服务，并需要获取此类信息以满足您的要求。我们可能与之共享个人信息的第三方类别如下：</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        1. <span style="font-family:宋体">联盟营销计划</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        2. <span style="font-family:宋体">云计算服务</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        3. <span style="font-family:宋体">通信与协作工具</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        4. <span style="font-family:宋体">数据分析服务</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        5. <span style="font-family:宋体">数据存储服务提供商</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        6. <span style="font-family:宋体">财务与会计工具</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        7. <span style="font-family:宋体">订单执行服务提供商</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        8. <span style="font-family:宋体">支付处理器</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        9. <span style="font-family:宋体">性能监控工具</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        10. <span style="font-family:宋体">社交网络</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        11. <span style="font-family:宋体">广告网络</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        12. <span style="font-family:宋体">测试工具</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        13. <span style="font-family:宋体">用户账户注册与认证服务</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        14. <span style="font-family:宋体">网站托管服务提供商</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        15. <span style="font-family:宋体">产品工程与设计工具</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        16. <span style="font-family:宋体">销售与营销工具</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">在刑事调查、欺诈调查、知识产权侵权或其他涉嫌非法活动中，或在适用法律要求的其他情况下，或在我们自行决定认为必要时，为了保护</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">的合法权益，我们也可能向执法部门或其他适当的第三方披露您的任何个人信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">在以下情况下，我们也可能需要共享您的个人信息：</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        1. <span style="font-family:宋体">业务转让。在任何合并、出售公司资产、融资或收购我们全部或部分业务给另一家公司的过程中，我们可能会共享或转让您的信息。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        2. <span style="font-family:宋体">关联公司。我们可能会与我们的关联公司共享您的信息，在这种情况下，我们将要求这些关联公司遵守本隐私声明。关联公司包括我们的母公司和任何子公司、合资伙伴或我们控制的或与我们处于共同控制下的其他公司。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        3. <span style="font-family:宋体">业务合作伙伴。我们可能会与我们的业务合作伙伴共享您的信息，以便向您提供某些产品、服务或促销活动。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">撤销同意或要求获取正确信息</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">撤销同意</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">如需撤销同意，请发送电子邮件至</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:Calibri">support@</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:Calibri">AccountBoy</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:Calibri">.cn</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">。您也可以通过选择</span>
                                        "<span style="font-family:宋体">我的帐户</span>
                                        <span style="font-family:Calibri">"-&gt;"</span>
                                        <span style="font-family:宋体">编辑</span>
                                        <span style="font-family:Calibri">"-&gt;"</span>
                                        <span style="font-family:宋体">删除帐户 </span>
                                        <span style="font-family:Calibri">"</span>
                                        <span style="font-family:宋体">菜单项来删除帐户，从而撤销同意。我们将对此类请求进行相应处理。您同意，如果您撤销同意，您可能无法继续完全使用我们的服务或完全访问我们的平台，我们可能会终止您与我们签订的合同。如果我们无法核实您的身份或理解您的指示，我们将与您联系。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">请求访问和</span>
                                        /<span style="font-family:宋体">或更正个人数据</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">如果您拥有我们的账户，您可以通过我们平台上的</span>
                                        "<span style="font-family:宋体">用户资料 </span>
                                        <span style="font-family:Calibri">"</span>
                                        <span style="font-family:宋体">页面访问我们目前掌握的您的个人数据。或者，您也可以通过 </span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:Calibri">support@</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:Calibri">AccountBoy</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:Calibri">.cn</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">提交书面申请。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">在请求访问个人数据时，我们必须从您那里获得足够的信息来处理请求。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">请求更正个人数据时，我们将在适用法律规定的时限内进行更正，但前提是我们必须获得足够的信息来核实和处理此类请求。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">隐私政策变更通知</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">保留随时更改隐私政策的权利，通过电子邮件通知注册用户新的隐私政策和</span>
                                        /<span style="font-family:宋体">或在 </span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        &nbsp;<span style="font-family:宋体">上公布新的隐私政策。对隐私政策的所有更改将在公布时生效，公布后您继续使用</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">、产品或服务将构成您接受并同意受这些更改的约束。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">联系</span>
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:宋体">账号星球</span>
                                        <span style="font-family:Calibri">(AccountBoy)</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">如果您对本隐私政策有任何疑问，或者您想行使您的任何法定权利，请随时联系我们。我们将在合理的时间内给予答复。</span>
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">美国客户：</span>
                                        +1 (206) 852-0290
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">香港客户：</span>
                                        +852 - 68599176
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">中国客户：</span>
                                        +86 - 18627142300
                                    </span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">
                                        <span style="font-family:宋体">电子邮件地址：</span>
                                        support@
                                    </span>
                                    <span style=";font-family:宋体;font-size:16px">
                                        <span style="font-family:Calibri">AccountBoy</span>
                                    </span>
                                    <span style=";font-family:Calibri;font-size:16px">.cn</span>
                                </p>
                                <p style=";line-height:19px">
                                    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
                                </p>`,
    'biz-footer-notes-title-help': '帮助说明',
    'biz-footer-notes-content-help':
      '<p><span style="text-wrap-style: initial;">1.平台内的礼品卡是正规可囤的吗？&nbsp;是的，我们的礼品卡都是线下实体店购买。&nbsp;</span></p><p><span style="text-wrap-style: initial;">2.海外账号可以使用多久？&nbsp;正常的操作是可以长时间使用的，具体要以官方风控为准。&nbsp;</span><br></p><p><span style="text-wrap-style: initial;">3.Steam充值卡会导致封号吗？&nbsp;不会，充值卡都是正规途径充值形成的卡密。</span><br></p><p><span style="text-wrap-style: initial;">4.提取了卡密还可以申请退款吗？&nbsp;如果是商品的问题，支持退款。如果核实后商品没有问题，平台拒绝退款~</span><br></p><p><br style="text-wrap-mode: wrap;"></p><p><br></p>',
    xxx: '',
  },
};
