export default defineNuxtPlugin((nuxtApp) => {
    // Ждем, когда скрипт полностью загрузится
    window.addEventListener('load', () => {
      if (typeof window.YaPay === 'undefined') {
        console.error('YaPay не загружен');
        return;
      }
  
      window.onYaPayLoad = function () {
        console.log('Good'); // Убедитесь, что этот лог выводится
        const YaPay = window.YaPay;
  
        let paymentSession;
  
        const paymentData = {
          env: YaPay.PaymentEnv.Sandbox, // Для продакшена используйте 'PRODUCTION'
          version: 4,
          currencyCode: YaPay.CurrencyCode.Rub,
          merchantId: '4d715c56-1ac9-49bc-9330-889e3487b2c1', // Ваш идентификатор продавца
          totalAmount: '15980.00',
          availablePaymentMethods: ['CARD', 'SPLIT'],
        };
  
        async function onPayButtonClick() {
          try {
            const orderData = {
              amount: paymentData.totalAmount,
              currency: paymentData.currencyCode,
            };
  
            const response = await fetch('/api/create-order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(orderData),
            });
  
            const { paymentUrl } = await response.json();
            console.log("Order created, payment URL:", paymentUrl);
            return paymentUrl;
          } catch (error) {
            console.error('Ошибка при создании заказа:', error);
          }
        }
  
        function onFormOpenError(reason) {
          console.error(`Ошибка при открытии формы оплаты: ${reason}`);
        }
  
        const createPaymentSession = () => {
          console.log('Creating new payment session with amount:', paymentData.totalAmount);
          YaPay.createSession(paymentData, {
            onPayButtonClick: onPayButtonClick,
            onFormOpenError: onFormOpenError,
          })
            .then((session) => {
              paymentSession = session;
              console.log('Payment session created');
  
              const splitElement = document.querySelector('#split');
              if (splitElement) {
                paymentSession.mountWidget(splitElement, {
                  widgetType: YaPay.WidgetType.BnplOffer,
                  padding: YaPay.WidgetPaddingType.Default,
                });
                console.log('Widget mounted on #split');
              } else {
                console.error('#split element not found');
              }
            })
            .catch((err) => {
              console.error('Ошибка при создании платежной сессии:', err);
            });
        };
  
        createPaymentSession();
  
        window.updateYaPayPrice = function (newTotalAmount) {
          console.log('Updating price:', newTotalAmount);
          paymentData.totalAmount = newTotalAmount;
          if (paymentSession) {
            paymentSession.destroy();
            console.log('Payment session destroyed');
          }
          createPaymentSession();
        };
      };
  
      // Теперь вызываем функцию после загрузки скрипта
      window.onYaPayLoad();
    });
  });
  